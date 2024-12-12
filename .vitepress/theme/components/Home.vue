<script setup>
import { useDateFormat } from "@vueuse/core";
import { useRouter } from "vitepress";
import { data as postsAll } from "../posts.data";
import BackToTop from "./module/btn/BackToTop.vue";

const tags = postsAll.map((e) => e.tag);
const selectedTags = ref([]);

const yearUrls = ref({});
const posts = ref([]);

watch(
  selectedTags,
  () => {
    posts.value = postsAll.filter(
      (e) =>
        selectedTags.value.length === 0 || selectedTags.value.includes(e.tag),
    );
    yearUrls.value = {};
    posts.value.forEach((e) => {
      if (!Object.keys(yearUrls.value).includes(e.year.toString())) {
        yearUrls.value[e.year] = e.url;
      }
    });
  },
  { immediate: true, deep: true },
);

const tagsHidden = ref(true);
const router = useRouter();
const routerPage = (url) => router.go(url);

function clickTag(tag) {
  const index = selectedTags.value.indexOf(tag);
  if (index === -1) {
    selectedTags.value.push(tag);
  } else {
    selectedTags.value.splice(index, 1);
  }
  console.log(tag, selectedTags.value);
}

function changeHidden(t) {
  console.log(t);
  tagsHidden.value = t;
}
</script>

<template>



  <main class="container flex justify-center mx-auto max-w-200">

    <template v-for="{ title, url, date, tag, description, year } of posts" :key="url">
      <div class="list-disc pl-5 space-y-2">
        <div v-if="Object.values(yearUrls).includes(url)"
          class="select-none text-2xl font-bold z-0  pointer-events-none italic">
          {{ year }}
        </div>
        <div class="text-blue-600  flex items-end text-xl ">
          <div @click="routerPage(url)" class="cursor-pointer  hover:underline">
            {{ title }}
          </div>
          <span class="text-gray-500 text-sm h-min cursor-default   ">
            {{ tag }} {{ useDateFormat(date.time, 'MM-DD').value }}
          </span>
        </div>
      </div>

    </template>


  </main>
  <BackToTop />
</template>

<style scoped>
.theme {
  color: var(--theme-color)
}
</style>
