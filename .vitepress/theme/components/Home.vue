<script setup>
import { useRouter } from 'vitepress'
import { useDateFormat } from '@vueuse/core'
import { data as postsAll } from '../posts.data'
import BackToTop from './module/btn/BackToTop.vue'
import HomeTop from './module/home/HomeTop.vue'

const posts = ref(postsAll)
const tagRef = ref(null)

const tags = {}
postsAll.forEach((e) => {
  tags[e.tag] = (tags[e.tag] + 1) || 1
})

const showyearUrls = ref({})

function pitchTag(tag) {
  if (tagRef.value) {
    tagRef.value = undefined
  }
  else {
    tagRef.value = tag
  }
}
watch(tagRef, () => {
  if (!tagRef.value) {
    posts.value = postsAll
  }
  else {
    posts.value = postsAll.filter(e => e.tag === tagRef.value)
  }

  showyearUrls.value = {}
  posts.value.forEach((e) => {
    if (!Object.keys(showyearUrls.value).includes(e.year.toString())) {
      showyearUrls.value[e.year] = e.url
    }
  })
  console.log(showyearUrls.value)
}, { immediate: true })

const router = useRouter()
const routerPage = url => router.go(url)
</script>

<template>
  <div class="mx-auto max-w-75ch">
    <div>
      <HomeTop />
    </div>
    <div class="m-5 mt-20">
      <div class="max-w-md mx-auto mt-10">
        <!-- <div class="relative">
          <button id="dropdownButton" class="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500" onclick="toggleDropdown()">
            Select Options
          </button>
          <div id="dropdownMenu" class="absolute z-10  w-full mt-2 bg-white border border-gray-300 rounded shadow-lg">
            <label class="block px-4 py-2">
              Option 1
            </label>
          </div>
        </div> -->
      </div>
      <template v-for="{ title, url, date, tag, description, year } of posts" :key="url">
        <div
          v-if="Object.values(showyearUrls).includes(url)"
          class="select-none text-10 mt-5 pl-5 op50 font-bold z-0  pointer-events-none italic"
        >
          {{ year }}
        </div>
        <div class="border-b flex m-2 transition-all duration-300 font-size-5">
          <div style="flex:0 0 4rem" class="italic">
            {{ useDateFormat(date.time, 'MM-DD').value }}
          </div>

          <div class="op100 hover:op70  theme cursor-pointer break-all " @click="routerPage(url)">
            {{ title }}
          </div>
          <div class="font-size-3">
            {{ tag }}
          </div>
        </div>
      </template>
    </div>
  </div>

  <BackToTop />
</template>

<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 75ch;
}

.theme{
  color:var(--theme-color)
}
</style>
