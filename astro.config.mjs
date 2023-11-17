import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import serviceWorker from "astrojs-service-worker";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site:'https://premierentp.netlify.app',
  output: "hybrid",
  prefetch: {
    prefetchAll: true
  },
  adapter: netlify({ edgeMiddleware: true }),
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    sitemap(),
    // serviceWorker()
  ],
});
