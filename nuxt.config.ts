import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },
  alias: {
    '@': resolve(__dirname, './'),
    '@stores': resolve(__dirname, './stores'),
    '@utils': resolve(__dirname, './utils'),
    '@components': resolve(__dirname, './components'),
  },
  runtimeConfig: {
    public: {
      name: '樱花动漫',
      api: 'http://www.dm88.me',
    },
  },
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
  build: {
    transpile: ['vuetify'],
  },
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'zh-cmn-Hans',
      },
      title: '樱花动漫',
      meta: [
        {
          name: 'keywords',
          content: '樱花动漫',
        },
        {
          name: 'description',
          content: '上万集高清晰画质的在线动漫, 观看免费、无须注册、高速播放、更新及时',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
    },
  },
  css: ['~/assets/css/global.scss', 'vuetify/lib/styles/main.sass'],
});
