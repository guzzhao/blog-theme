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
  <div class="mx-auto max-w-75ch">
    <div class="m-10 mt-10">

      <div class="w-20 mx-auto mt-10 fixed left-10" @mouseleave="changeHidden(true)" @mouseenter="changeHidden(false)">
        <button id="dropdownButton"
          class="w-full px-4 py-2 text-center  border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500">
          tags
        </button>
        <div id="dropdownMenu" class="absolute z-10  w-full   border border-gray-300 rounded shadow-lg "
          :class="{ hidden: tagsHidden }">
          <label v-for="tag in tags" :key="tag" class=" truncate block text-center px-4 py-2" @click="clickTag(tag)">
            {{ tag }}
          </label>
        </div>
      </div>
      <template v-for="{ title, url, date, tag, description, year } of posts" :key="url">
        <div v-if="Object.values(yearUrls).includes(url)"
          class="select-none text-10 mt-5 pl-5 op50 font-bold z-0  pointer-events-none italic">
          {{ year }}
        </div>
        <div class="border-b flex m-5 transition-all duration-300 font-size-5">
          <div style="flex:0 0 4rem" class="italic">
            {{ useDateFormat(date.time, 'MM-DD').value }}
          </div>

          <div class="op100 hover:op70  theme cursor-pointer break-all " @click="routerPage(url)">
            {{ title }}
          </div>
          <div class="font-size-3 pl-1">
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

.theme {
  color: var(--theme-color)
}
</style>
