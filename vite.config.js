import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { RssPlugin } from 'vitepress-plugin-rss'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['vitepress'],
  },
  resolve: {
    alias: [
      {
        find: /^.*\/VPFooter\.vue$/,
        replacement: fileURLToPath(
          new URL('./.vitepress/theme/components/module/view/Footer.vue', import.meta.url),
        ),
      },
      {
        find: /^.*\/VPNav\.vue$/,
        replacement: fileURLToPath(
          new URL('./.vitepress/theme/components/module/view/Nav.vue', import.meta.url),
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
})
