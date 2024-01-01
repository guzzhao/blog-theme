<script setup>
import { useRouter } from 'vitepress'
import { useDateFormat, watchArray } from '@vueuse/core'
import { data as postsAll } from '../posts.data'
import BackToTop from './module/BackToTop.vue'
import HomeTop from './module/HomeTop.vue'
import HomeRight from './module/homeright.vue'
import FluentTextDescription20Regular from '~icons/fluent/text-description-20-regular'

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

const isSimple = ref(false)

function changeSimple() {
  isSimple.value = !isSimple.value
}

const router = useRouter()
const routerPage = url => router.go(url)
</script>

<template>
  <div class="m-3 container flex-col p-2">
    <div>
      <HomeTop />
    </div>
    <div class="flex flex-col  mt-8 sm:flex-row">
      <div class="left w-3/4">
        <template v-for="{ title, url, date, tag, description, year } of posts" :key="url">
          <div v-if="Object.values(showyearUrls).includes(url)" class="select-none text-5em pt-1 pl-5 op50 font-bold z-0 slide-enter pointer-events-none">
            {{ year }}
          </div>
          <div id="row" class="border-b z-1 p-1 pb-3" :class="{ 'm-1': !isSimple }">
            <div class="flex items-center justify-between">
              <div flex>
                <h1 :class="{ 'font-size-1rem': isSimple, 'font-size-2rem ': !isSimple }" class=" hover:text-#30a9de  cursor-pointer font-bold" @click="routerPage(url)">
                  {{ title }}
                </h1>
                <div class="px-4">
                  {{ tag }}
                </div>
              </div>
              <div class="items-center font-size-1em">
                {{ useDateFormat(date.time, 'MM月DD日').value }}
              </div>
            </div>
            <div v-if="!isSimple" class="flex font-size-3 mr-1">
              <div
                v-if="description"
                class=" hover:text-#30a9de  flex items-center  max-w-3/5 overflow-hidden whitespace-nowrap"
              >
                <FluentTextDescription20Regular />
                <div class="whitespace-nowrap overflow-hidden" :title="description">
                  {{ description }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="right w-1/4 flex flex-col items-center p-2">
        <HomeRight :tags="tags" @pitch-tag="pitchTag" />
      </div>
    </div>
  </div>

  <BackToTop />
  <div id="tags">
    <div :class="{ actice: isSimple }" @click="changeSimple">
      简单
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  min-height: 80vh;
  background-color: var(--center-bg);
  border: 1px solid rgba(18, 69, 88, 0.09);

}

#tags {
  position: fixed;
  top: 90vh;
  left: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .actice,
  :hover {
    padding-left: 8px;
    transition: all 0.3s ease-out;
  }
}

#row {
  &:hover {
    background-color: rgba(18, 69, 88, 0.09);
    transition: background-color 3s ease;
  }
}
</style>
