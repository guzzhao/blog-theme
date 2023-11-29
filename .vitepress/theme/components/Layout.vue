<script setup>
import DefaultTheme from 'vitepress/theme'
import ArticleFooter from './module/ArticleFooter.vue'
import ArticleHead from './module/ArticleHead.vue'
import NotFound from './NotFound.vue'
import Home from './Home.vue'
import Footer from './Footer.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <ArticleHead />
    </template>
    <template #doc-after>
      <ArticleFooter />
    </template>

    <template #home-hero-before>
      <Home />
    </template>
    <template #home-hero-after>
      <Footer />
    </template>

    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>
