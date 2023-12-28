<script setup>
const props = defineProps({
  tags: Object,
})

const emit = defineEmits(['pitchTag', 'changeSimple'])

function change(v) {
  console.log(v)
  emit('pitchTag', v)
}
function changeSimple() {
  emit('changeSimple')
}

const { tags } = toRefs(props)
console.log('props', tags.value)
</script>

<template>
  <div class="w-full flex flex-col items-center p-10 pt-0 m-1 ">
    <img src="https://images.unsplash.com/photo-1703100941710-3b860fa37415" alt="" class="rounded-5 h-32 w-32">
    <div>
      github wechat
    </div>
  </div>
  <div>
    <button @click="changeSimple">
      简单
    </button>
  </div>
  <div class="w-full m-1 ">
    <div class="p-1">
      tags
    </div>
    <span v-for="(k, v) in tags" :key="v" class="p-1 b-1 b-gray b-solid m-1 rounded-5 hover:shadow-lg transition duration-100 ease-in-out" @click="change(v)">
      {{ v }}({{ k }})
    </span>
  </div>
</template>

<style scoped>

</style>
