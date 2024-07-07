<script setup>
import { useData } from 'vitepress'
import FluentFlashlight24Filled from '~icons/fluent/flashlight-24-filled'
import FluentFlashlightOff24Filled from '~icons/fluent/flashlight-off-24-filled'
import IcomoonFreeSwitch from '~icons/icomoon-free/switch'

const mouseover = ref(false)
const { isDark } = useData()

function switchDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div id="main" @click="switchDark" @mouseover="mouseover = true" @mouseleave="mouseover = false">
    <template v-if="isDark">
      <IcomoonFreeSwitch v-if="mouseover" />
      <FluentFlashlightOff24Filled v-else />
    </template>

    <template v-else>
      <IcomoonFreeSwitch v-if="mouseover" />
      <FluentFlashlight24Filled v-else />
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
