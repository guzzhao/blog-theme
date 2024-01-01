<script setup>
import SwitchDark from './SwitchDark.vue'

const props = defineProps({
  tags: Object,
})

const emit = defineEmits(['pitchTag'])

function change(v) {
  emit('pitchTag', v)
}

const { tags } = toRefs(props)
</script>

<template>
  <div class="w-full flex flex-col items-center p-10 pt-0 m-1 ">
    <img src="https://images.unsplash.com/photo-1703100941710-3b860fa37415" alt="" class="rounded-5 h-32 w-32">
    <div>
      <!-- github wechat -->
    </div>
  </div>
  <SwitchDark />
  <div class="w-full m-1 b-amber p-5">
    <div class="p-1 font-600">
      tags
    </div>
    <div class="flex flex-wrap ">
      <span v-for="(k, v) in tags" :key="v" class="p-1 b-1 b-gray b-solid m-1 rounded-5 hover:shadow-lg transition duration-100 ease-in-out cursor-pointer" @click="change(v)">
        {{ v }}({{ k }})
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>
