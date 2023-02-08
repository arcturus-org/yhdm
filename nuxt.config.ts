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
  },
  runtimeConfig: {
    public: {
      api: 'http://www.dm88.me', // 动漫花园官网
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
          content:
            '樱花动漫拥有上万集高清晰画质的在线动漫, 观看完全免费、无须注册、高速播放、更新及时的专业在线樱花动漫站, 我们致力为所有动漫迷们提供最好看的动漫',
        },
      ],
    },
  },
  css: ['~/assets/css/global.scss', 'vuetify/lib/styles/main.sass'],
});
