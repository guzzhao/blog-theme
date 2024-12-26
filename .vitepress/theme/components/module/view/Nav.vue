<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
import { useData, useRouter } from 'vitepress'
import SwitchDark from '../btn/SwitchDark.vue'
import Info from '../btn/Info.vue'

const { site, theme, page, frontmatter } = useData()

console.log(site.value)
console.log(theme.value)
console.log(page.value)
console.log(frontmatter.value)


const router = useRouter();
const routerPage = () => router.go('/');


</script>

<template>

  <nav class="navbar backdrop-blur-sm z-1000 mb-5">
    <div class="flex-1 ml-5 ">
      <a class="text-5xl font-bold cursor-pointer " @click="routerPage" >{{ site.title }}</a>
    </div>
    <div class="flex-none flex">
      <Info class="mr-5"/>
      <SwitchDark />
    </div>
  </nav>

</template>

<style scoped></style>
