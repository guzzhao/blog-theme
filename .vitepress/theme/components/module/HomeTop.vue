<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
import { useData, useRouter } from 'vitepress'
import SwitchDark from './SwitchDark.vue'
import PhSunHorizonDuotone from '~icons/ph/sun-horizon-duotone'

const { frontmatter } = useData()

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')

function switchDark() {

}
</script>

<template>
  <div class="flex justify-between">
    <div>
      <span class="font-size-20 ">
        {{ frontmatter.title }}
      </span>
      <span> {{ frontmatter.subTitle }}</span>
    </div>
    <div class="flex items-center">
      <span class="p-3 w-50">{{ formatted }} </span>
      <SwitchDark />
    </div>
  </div>
</template>

<style scoped>
</style>
