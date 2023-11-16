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
import { presetExtra } from 'unocss-preset-extra'
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
    presetExtra(),
  ],

  safelist: ['i-mdi:facebook', 'i-mdi-github'],

  rules:[
    ['w-content', {width: 'max-content' }]
  ]
})
