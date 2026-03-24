import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import nodemailer from "nodemailer";
import { z } from "zod";

dotenv.config();

const app = express();

const port = Number(process.env.PORT || 8787);
const contactRecipient = process.env.MAIL_TO || "rajivshresthaa23@gmail.com";
const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:8080,http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(10).max(5000),
  source: z.string().trim().max(120).optional(),
  submittedAt: z.string().trim().max(100).optional(),
});

const createTransporter = () => {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return null;
  }

  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
};

const transporter = createTransporter();

app.use(helmet());
app.use(express.json({ limit: "20kb" }));
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
  }),
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX || 10),
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." },
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.post("/api/contact", limiter, async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      error: "Invalid form data",
      fields: parsed.error.flatten().fieldErrors,
    });
    return;
  }

  if (!transporter) {
    res.status(503).json({
      error: "Email service not configured",
      hint: "Set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env",
    });
    return;
  }

  const { name, email, message, source, submittedAt } = parsed.data;

  const subject = `Portfolio Contact: ${name}`;
  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    source ? `Source: ${source}` : undefined,
    submittedAt ? `Submitted At: ${submittedAt}` : undefined,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${source ? `<p><strong>Source:</strong> ${source}</p>` : ""}
    ${submittedAt ? `<p><strong>Submitted At:</strong> ${submittedAt}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: contactRecipient,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    res.status(200).json({ success: true, message: "Message sent" });
  } catch (error) {
    console.error("Failed to send contact email", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.use((error, _req, res, _next) => {
  if (error?.message === "Not allowed by CORS") {
    res.status(403).json({ error: "Origin not allowed" });
    return;
  }

  console.error("Unexpected server error", error);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Contact backend running on http://localhost:${port}`);
});
