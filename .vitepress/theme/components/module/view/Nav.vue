<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
import { useData, useRouter } from 'vitepress'
import SwitchDark from '../btn/SwitchDark.vue'

const { site, theme, page, frontmatter } = useData()

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
const createTime = useDateFormat(frontmatter.value.date, 'YYYY-MM-DD HH:mm')
const lastUpdated = useDateFormat(page.value.lastUpdated, 'YYYY-MM-DD HH:mm')

console.log(site.value, theme.value, page.value, frontmatter.value, frontmatter.value.date)
</script>

<template>
  <div class="flex justify-between h-20 px-10 ">
    <div class="flex items-end h-20 ">
      <span class="font-size-20 h-20 p-1 flex items-end">
        {{ site.title }}
      </span>
      <span class="font-size-5">
        {{ site.titleTemplate }}
      </span>
      <!--  <span v-if="!frontmatter.layout">{{ createTime }}</span>
      <span v-if="!frontmatter.layout"> 最后更新时间: {{ lastUpdated }}</span> -->
    </div>
    <div class=" flex items-center">
      <span class="p-3 w-50">{{ formatted }} </span>
      <SwitchDark />
    </div>
  </div>
</template>

<style scoped></style>
