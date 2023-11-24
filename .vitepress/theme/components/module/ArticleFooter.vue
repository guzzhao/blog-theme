<script setup>
import BackToTop from './BackToTop.vue'
</script>

<template>
  <div id="footer">
    <BackToTop />
    <a class="link" href="/">← Back </a>
  </div>
</template>

<style scoped>
#footer {
  position: fixed;
  right: 2rem;
  bottom: 4rem;
}
</style>
