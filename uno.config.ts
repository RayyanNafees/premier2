// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetIcons,
  presetWebFonts,
  presetTypography,
  // presetAttributify,
} from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'
import { presetFlowbite } from '@julr/unocss-preset-flowbite'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        lato: 'Lato',
      },
    }),
    // presetAttributify(),
    presetForms(),
    presetTypography(),
    presetFlowbite(),
  ],

  safelist: ['i-mdi:facebook', 'i-mdi-github'],
})
