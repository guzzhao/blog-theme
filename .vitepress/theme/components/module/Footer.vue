<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="flex justify-center">
    <div class="mr-5">
      {{ frontmatter.footer }}
    </div>
    |
    <a href="https://github.com/guzzhao/myBlog" class="ml-5">theme</a>
  </div>
</template>

<style scoped>
</style>
