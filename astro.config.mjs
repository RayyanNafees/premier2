import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import serviceWorker from "astrojs-service-worker";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://premierentp.vercel.app',
  output: "server",
  prefetch: {
    prefetchAll: true
  },
  adapter: vercel({
    edgeMiddleware: true
  }),
  integrations: [UnoCSS({
    injectReset: true
  }), sitemap()
  // serviceWorker()
  ]
});