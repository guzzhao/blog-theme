<script setup>
import { getDate } from '../../utils.js'
import PhCalendarCheckDuotone from '~icons/ph/calendar-check-duotone'

const props = defineProps(['date'])

const date = computed(() => {
  return getDate(new Date(props.date))
})
</script>

<template>
  <div class="flex items-center">
    <PhCalendarCheckDuotone />
    <time>{{ date }} </time>
  </div>
</template>
