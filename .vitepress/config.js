import { defineConfig } from 'vitepress'
import { URL, fileURLToPath } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { RssPlugin } from 'vitepress-plugin-rss'
import tailwindcss from '@tailwindcss/vite'

const logo = '/logo.svg'

export default defineConfig({
  lang: 'zh-CN',
  title: 'GU',
  titleTemplate: '嘀嘀嘀~~',
  footer: 'Copyright © 2024-present guzzhao',
  cleanUrls: true,
  markdown: {
    theme: 'vitesse-dark',
    lineNumbers: false,
    image: {
      lazyLoading: true,
    },
  },
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg',
        href: logo,
      },
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'gu',
      },
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: 'Home',
      },
    ],
  ],
  themeConfig: {
    logo,
    search: null,
    aside: false,
    outline: false, // 貌似有bug
    // nav: [
    //   {
    //     text: 'about',
    //     link: '/about',
    //   },
    // ],

    footer: true,
    lastUpdated: {
      text: '最后更新 ',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
    socialLinks: [
    ],

  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/module/view/Footer.vue', import.meta.url),
          ),
        },
        {
          find: /^.*\/VPNav\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/module/view/Nav.vue', import.meta.url),
          ),
        },
      ],
    },
    plugins: [
      tailwindcss(),
      AutoImport({
        imports: [
          'vue',
          '@vueuse/core',
        ],
        dts: 'types/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
          filepath: 'types/.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
      Components({
        resolvers: [IconsResolver()],
        dts: 'types/components.d.ts',
      }),
      Icons({
        compiler: 'vue3',
      }),
      [RssPlugin({
        title: 'guzzhao',
        baseUrl: 'https://blog-demo.guzha0.com',
        copyright: 'Copyright (c) 2018-present, guzzhao',
      })],
    ],
  }
})
