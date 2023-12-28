<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
import { useData, useRouter } from 'vitepress'

const { frontmatter } = useData()

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
</script>

<template>
  <div class="flex justify-between">
    <div>
      <span class="font-size-20 ">
        {{ frontmatter.title }}
      </span>
      <span> {{ frontmatter.subTitle }}</span>
    </div>

    <span class="p-3 w-50">{{ formatted }}</span>
  </div>
</template>

<style scoped>
</style>
