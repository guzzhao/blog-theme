<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
import PhCalendarCheckDuotone from '~icons/ph/calendar-check-duotone'

const props = defineProps({
  date: {
    default: null,
  },
  isSimple: {
    default: false,
  },
})
const formatted = useDateFormat(props.date, props.isSimple ? 'YYYY/MM/DD' : 'YYYY年MM月DD日')
</script>

<template>
  <div class="flex items-center">
    <PhCalendarCheckDuotone v-if="!props.isSimple" />
    <time>{{ formatted }} </time>
  </div>
</template>
