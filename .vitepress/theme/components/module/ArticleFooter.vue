<script setup>
import { useRouter } from 'vitepress'
import BackToTop from './BackToTop.vue'
import StreamlineReturn2Solid from '~icons/streamline/return-2-solid'

const { go } = useRouter()
function goBack() {
  go('/')
}
</script>

<template>
  <div id="footer">
    <BackToTop />
    <StreamlineReturn2Solid class="cursor-pointer" @click="goBack" />
  </div>
</template>

<style scoped>
#footer {
  position: fixed;
  right: 20px;
  bottom: 4rem;
}
</style>
