import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['vitepress'],
  },
  resolve: {
    alias: [
      {
        find: /^.*\/VPFooter\.vue$/,
        replacement: fileURLToPath(
          new URL('./.vitepress/theme/components/module//Footer.vue', import.meta.url),
        ),
      },
      {
        find: /^.*\/VPNav\.vue$/,
        replacement: fileURLToPath(
          new URL('./.vitepress/theme/components/module/empty.vue', import.meta.url),
        ),
      },
    ],
  },
  plugins: [
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: true, // Default `false`
        filepath: 'types/.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      resolvers: [IconsResolver()],
      dts: 'types/components.d.ts',
    }),
    Icons({
      // experimental
      compiler: 'vue3',
    }),
  ],
})
