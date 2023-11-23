import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'

const logo = '/logo.svg'

export default defineConfig({
  lang: 'zh-CN',
  title: 'blog',
  cleanUrls: true,
  markdown: {
    theme: 'vitesse-dark',
    lineNumbers: false,
    anchor: {
      slugify(str) {
        return encodeURIComponent(str)
      },
    },
  },
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
    aside: false,
    search: null,
    // nav: [
    //   {
    //     text: "🏡Blogs",
    //     link: "/",
    //   },
    //   {
    //     text: "🔖Tags",
    //     link: "pages/tags",
    //   },
    // ],
    // socialLinks: [
    //   { icon: "github", link: "https://github.com" },
    // ],

  },
  vite: {
    optimizeDeps: {
      exclude: ['vitepress'],
    },
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/module/SwitchDark.vue', import.meta.url),
          ),
        },
      ],
    },
    plugins: [
      UnoCSS(),
      Icons({ /* options */ }),
    ],
  },
})
