import { defineNuxtConfig } from 'nuxt'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      apiBaseUrl: process.env.API_BASE_URL || 'https://localhost:5004',
    },
  },
  css: [
    '@/assets/css/tailwind.css',
    '~/assets/css/fontawesome.css',
    '~/assets/css/main.css'
  ],
  intlify: {
    localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
    vueI18n: {
      locale: 'de-DE',
      fallbackLocale: "en-US",
      availableLocales: ["en-US", "de-DE"],
      sync: true,
    },
  },
  vite: {
    plugins: [
      VueI18nPlugin({
        /* options */
        // locale messages resource pre-compile option
        include: resolve(dirname(fileURLToPath(import.meta.url)), './path/to/src/locales/**'),
      }),
    ],
  },
  modules: ['@pinia/nuxt', '@intlify/nuxt3'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
