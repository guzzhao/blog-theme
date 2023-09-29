<script  setup>
import { useData } from 'vitepress'
import { ref } from 'vue'
import FluentEmojiFlatSun from '~icons/fluent-emoji-flat/sun'
import FluentEmojiFlatCrescentMoon from '~icons/fluent-emoji-flat/crescent-moon'
import FluentEmojiFlatSunWithFace from '~icons/fluent-emoji-flat/sun-with-face'
import FluentEmojiFlatFirstQuarterMoonFace from '~icons/fluent-emoji-flat/first-quarter-moon-face'

const mouseover = ref(false)
const { isDark } = useData()



function switchDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div id="main" @click="switchDark" @mouseover="mouseover = true" @mouseleave="mouseover = false">
    <template v-if="isDark">
      <FluentEmojiFlatFirstQuarterMoonFace v-if="mouseover" />
      <FluentEmojiFlatCrescentMoon v-else />
    </template>

    <template v-else>
      <FluentEmojiFlatSunWithFace v-if="mouseover" />
      <FluentEmojiFlatSun v-else />
    </template>
  </div>
</template>

<style scoped>
.sun {
  opacity: 1;
}

.moon {
  opacity: 0;
}

.dark .sun {
  opacity: 0;
}

.dark .moon {
  opacity: 1;
}

.dark .VPSwitchAppearance :deep(.check) {
  /*rtl:ignore*/
  transform: translateX(18px);
}


#main {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer
}
</style>
