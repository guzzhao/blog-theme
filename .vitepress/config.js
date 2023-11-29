import { defineConfig } from 'vitepress'

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
    aside: false,
    search: null,
    nav: [
      {
        text: 'about',
        link: '/about',
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],

  },
})
