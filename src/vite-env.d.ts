/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_CONTACT_FORM_ENDPOINT?: string;
	readonly VITE_CONTACT_FORM_AUTH_TOKEN?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
