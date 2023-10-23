/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PB_PASS: string;
  readonly PB_HOST: string;
  readonly PB_EMAIL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}