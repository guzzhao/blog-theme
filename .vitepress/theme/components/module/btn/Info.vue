<script setup>
import CibAboutMe from '~icons/cib/about-me'
import { useRouter } from "vitepress";

const router = useRouter();
const routerPage = () => router.go('/info');


</script>

<template>
  <div id="main" @click="routerPage" class="cursor-pointer">
    <CibAboutMe />

  </div>
</template>

<style scoped>
</style>
