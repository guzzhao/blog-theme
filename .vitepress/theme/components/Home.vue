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
  <div class="flex justify-center">
    <div class="container m-3 p-2">
      <div>
        <HomeTop />
      </div>
      <div class="m-5 mt-20">
        <template v-for="{ title, url, date, tag, description, year } of posts" :key="url">
          <div
            v-if="Object.values(showyearUrls).includes(url)"
            class="h-10 select-none text-5em pt-1 pl-5 op50 font-bold z-0 slide-enter pointer-events-none"
          >
            {{ year }}
          </div>
          <div id="row" class="border-b flex justify-between items-center m-2 h-auto">
            <h1 class=" hover:text-#30a9de  cursor-pointer font-bold font-size-2em break-all m-2" @click="routerPage(url)">
              {{ title }}
            </h1>
            <div class=" font-size-3 flex-shrink-0">
              [{{ tag }}] {{ useDateFormat(date.time, 'MM月DD日').value }}
            </div>

            <!-- <div class="flex font-size-1rm mr-1">
              <div v-if="description" class=" hover:text-#30a9de  flex items-center">
                <FluentTextDescription20Regular />
                <div :title="description">
                  {{ description }}
                </div>
              </div>
            </div> -->
          </div>
        </template>
      </div>
    </div>
  </div>

  <BackToTop />
</template>

<style scoped>
.container {
  width: 60%;
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
