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
  
 

    <template #page-top>
      <Home />
    </template>

    <template #doc-top>
      <ArticleHead />
    </template>
   <template #doc-bottom>
      <ArticleFooter />
    </template>


    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>
