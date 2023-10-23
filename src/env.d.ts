/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_PB_PASS: string;
  readonly PUBLIC_PB_HOST: string;
  readonly PUBLIC_PB_EMAIL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
