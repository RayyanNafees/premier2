import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import serviceWorker from "astrojs-service-worker";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({ edgeMiddleware: true }),
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    prefetch(),
    sitemap(),
    serviceWorker()
  ],
});
