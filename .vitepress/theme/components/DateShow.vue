<script setup>
import { computed } from 'vue'
import { getDate } from '../utils.js'

const props = defineProps(['date'])

const date = computed(() => {
  return getDate(new Date(props.date))
})
</script>

<template>
  <time>{{ date }} </time>
</template>
