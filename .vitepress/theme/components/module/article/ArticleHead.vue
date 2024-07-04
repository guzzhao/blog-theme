<script setup>
import { useData } from 'vitepress'
import { useBrowserLocation, useClipboard } from '@vueuse/core'
import DateShow from '../DateShow.vue'
import PhCopyDuotone from '~icons/ph/copy-duotone'

const { frontmatter } = useData()
const location = useBrowserLocation()
const { copy, isSupported } = useClipboard()

function handleCopy() {
  if (!isSupported) {
    return
  }
  console.log(location.value.href)
  copy(location.value.href)
}
</script>

<template>
  <div class="flex flex-col w-200">
    <div class="font-size-12 h-auto font-bold break-all mb-5 ">
      {{ frontmatter.title }}
    </div>

    <div class="flex">
      <DateShow id="date" :date="frontmatter.date" />
      <PhCopyDuotone class=" cursor-pointer " @click="handleCopy" />
    </div>
  </div>
</template>

<style scoped>
#date{
  font: 2em;
  /* align-self: flex-end; */
}
</style>
