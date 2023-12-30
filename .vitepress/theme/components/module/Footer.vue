<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="flex justify-center">
    <div>
      {{ frontmatter.footer }}
    </div>
  </div>
</template>

<style scoped>
</style>
