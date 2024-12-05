<script setup>
import DefaultTheme from "vitepress/theme";
import { useRouter } from "vitepress";
import ArticleFooter from "./module/article/ArticleFooter.vue";
import ArticleHead from "./module/article/ArticleHead.vue";
import NotFound from "./NotFound.vue";
import Home from "./Home.vue";

const { Layout } = DefaultTheme;
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
    <template #home-hero-after />

    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>
