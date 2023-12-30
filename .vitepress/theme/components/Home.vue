<script setup>
import { useRouter } from 'vitepress'
import { data as postsAll } from '../posts.data'
import DateShow from './module/DateShow.vue'
import BackToTop from './module/BackToTop.vue'
import HomeTop from './module/HomeTop.vue'
import HomeRight from './module/homeright.vue'
import FluentTextDescription20Regular from '~icons/fluent/text-description-20-regular'

const router = useRouter()
const posts = ref([...postsAll])
const tagRef = ref(null)

const tags = {}

const t = postsAll.map(e => e.tag)
for (let i = 0, l = t.length; i < l; i++) {
  const item = t[i]
  tags[item] = (tags[item] + 1) || 1
}

function pitchTag(tag) {
  if (!tag || tag === tagRef.value) {
    posts.value = postsAll
    tagRef.value = null
  }
  else {
    tagRef.value = tag
    posts.value = postsAll.filter(e => e.tag === tag)
  }
}

const isSimple = ref(false)

function changeSimple() {
  isSimple.value = !isSimple.value
}

const routerPage = url => router.go(url)
</script>

<template>
  <div class="m-3 container flex-col">
    <div>
      <HomeTop />
    </div>
    <div class="flex flex-col  mt-8 sm:flex-row">
      <div class="left w-3/4">
        <ul>
          <li
            v-for="{ title, url, date, frontmatter, tag } of posts" id="row" :key="url" class="m-1"
            @click="routerPage(url)"
          >
            <article>
              <div class="title m-1 hover:text-#30a9de flex" :class="{ simpleTitle: isSimple }">
                <DateShow
                  v-if="isSimple" id="date" :is-simple="isSimple" :date="date.time"
                  class=" hover:text-#30a9de mr-3"
                />
                <div class="flex items-center">
                  {{ title }}
                </div>
              </div>
              <div v-if="!isSimple" class="flex font-size-3 mr-1">
                <DateShow id="date" :date="date.time" class=" hover:text-#30a9de " />
                <div class="px-4">
                  {{ tag }}
                </div>
                <div v-if="frontmatter.intro" id="intro" class=" hover:text-#30a9de  flex items-center">
                  <FluentTextDescription20Regular /> {{ frontmatter.intro }}
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
      <div class="right w-1/4 flex flex-col items-center ">
        <HomeRight :tags="tags" @pitch-tag="pitchTag" @change-simple="changeSimple" />
      </div>
    </div>
  </div>

  <BackToTop />
  <div id="tags">
    <div v-for="tag in Object.keys(tags)" :key="tag" :class="{ actice: tagRef === tag }" @click="pitchTag(tag)">
      {{ tag }}
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  min-height: 80vh;
  background-color: var(--center-bg);
}

#tags {
  position: fixed;
  top: 40vh;
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
  cursor: pointer;
  padding: 1vb;
  border: 1px solid rgba(18, 69, 88, 0.01);

  &:hover {
    /* font-weight: 1000; */

    border-radius: 0.375rem;
    border: 1px solid rgba(18, 69, 88, 0.09);
  }
}

#intro {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.title {
  font-size: 1.5em;
  border-radius: 10px;
  border: 1px;
  font-weight: 600;

  &:hover {
    filter: contrast(1.1);
  }

  &:active {
    filter: contrast(0.9);
  }

}

.simpleTitle {
  font-size: 1em;
  font-weight: 500;
}
</style>
