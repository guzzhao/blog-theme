<script setup>
import { useData } from 'vitepress'
import { useBrowserLocation, useClipboard } from '@vueuse/core'
import DateShow from '../DateShow.vue'
import PhCopyDuotone from '~icons/ph/copy-duotone'

const { frontmatter } = useData()
const location = useBrowserLocation()
const { copy, isSupported } = useClipboard()

let copyStatus = ref("Copy")

function handleCopy() {
  if (!isSupported) {
    return
  }
  copy(location.value.href)
  copyStatus.value = "Copied"
}
</script>

<template>
  <div class="flex flex-col  items-center">
    <div class="text-4xl h-auto font-bold break-all mb-5 ">
      {{ frontmatter.title }}
    </div>

    <div class="flex">
      <DateShow id="date" :date="frontmatter.date" />
      <div class="tooltip pl-1" :data-tip="copyStatus">
        <PhCopyDuotone class=" cursor-pointer " @click="handleCopy" />
      </div>

    </div>
  </div>
</template>

<style scoped>
#date {
  font: 2em;
  /* align-self: flex-end; */
}
</style>
