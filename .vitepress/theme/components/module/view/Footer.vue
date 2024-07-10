<script setup>
import { useData, useRouter } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="flex flex-col justify-center items-center p-5">
    <p class="message">
      <a href="https://github.com/guzzhao/myBlog" class="ml-5">theme</a> with vitepress
    </p>
    <p class="copyright">
      {{ frontmatter.footer }}
    </p>
  </div>
</template>

<style scoped></style>
