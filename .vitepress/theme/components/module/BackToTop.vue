<script setup>
import { ref, watch, watchEffect } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import GameIconsTopPaw from '~icons/game-icons/top-paw'

const { x, y } = useWindowScroll({ behavior: 'smooth' })

function goTop() {
  y.value = 0
}

const isActive = ref(false)

watch(y, () => {
  isActive.value = y.value > 300
})
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="isActive" class="backToTop" @click="goTop">
      <GameIconsTopPaw />
    </div>
  </Transition>
</template>

<style scoped>
.backToTop {
 position: fixed;
 bottom: 25px;
 right: 20px;
 cursor: pointer
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
