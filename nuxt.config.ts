// https://v3.nuxtjs.org/api/configuration/nuxt.config

const baseUrl = process.env.BASE_URL || 'https://localhost/'


export default defineNuxtConfig({
  ssr: false,
  css: [
    'ress',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:math";@use "@/assets/sass/index.scss" as *;'
        }
      }
    }
  },
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: ''},

        { hid: 'og:description', name: 'og:description', content: '' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: baseUrl },
        { hid: 'og:image', property: 'og:image', content: `${baseUrl}/ogp.png` },

        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@' },
      ],
      bodyAttrs: {
        class: 'l-body',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap' },
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.9/dat.gui.min.js'}
      ]
    },
  }
})
