<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
import { useData, useRouter } from 'vitepress'
import SwitchDark from '../btn/SwitchDark.vue'

const { site, theme, page, frontmatter } = useData()

console.log(site.value)
console.log(theme.value)
console.log(page.value)
console.log(frontmatter.value)



</script>

<template>

  <nav class="navbar backdrop-blur-sm z-1000 mb-10">
    <div class="flex-1">
      <a class="text-5xl font-bold">{{ site.title }}</a>
    </div>
    <div class="flex-none">
      <SwitchDark />
    </div>
  </nav>

</template>

<style scoped></style>
