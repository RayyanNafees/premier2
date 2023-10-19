import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import UnoCSS from 'unocss/astro'


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({functionPerRoute:false}),
  integrations: [UnoCSS({injectReset: true}), prefetch(), sitemap(), solidJs()],
  vite: {
  			ssr: {
  							noExternal: ["solid-js"]
  									
  										
  			}
  }
});
