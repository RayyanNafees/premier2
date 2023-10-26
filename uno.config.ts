// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetIcons,
  presetWebFonts,
  presetTypography,
  // presetAttributify,
} from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: "google",
      fonts: {
        lato: "Lato",
      },
    }),
    // presetAttributify(),
    presetForms(),
    presetTypography()
  ],

  safelist: ["i-mdi:facebook", "i-mdi-github"],
});
