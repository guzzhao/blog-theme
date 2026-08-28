// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://guzzhao.github.io',
  base: '/blog-theme',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
