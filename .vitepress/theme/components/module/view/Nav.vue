<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
import { useData, useRouter } from 'vitepress'
import SwitchDark from '../btn/SwitchDark.vue'

const { site, theme, page, frontmatter } = useData()

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
const createTime = useDateFormat(frontmatter.value.date, 'YYYY-MM-DD HH:mm')
const lastUpdated = useDateFormat(page.value.lastUpdated, 'YYYY-MM-DD HH:mm')

</script>

<template>

  <div class="navbar backdrop-blur-sm fixed top-0 z-1000">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">{{ site.title }}</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <SwitchDark />
      </button>
    </div>
  </div>

</template>

<style scoped></style>
