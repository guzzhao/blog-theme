<script setup>
import { useRouter } from 'vitepress'
import { data as postsAll } from '../posts.data'
import DateShow from './module/DateShow.vue'
import BackToTop from './module/BackToTop.vue'
import HomeRight from './module/HomeRight.vue'
import FluentTextDescription20Regular from '~icons/fluent/text-description-20-regular'

const router = useRouter()

const posts = ref([...postsAll])
const tagRef = ref(null)
// const tags = [...new Set(postsAll.map(e => e.tag))]

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

const routerPage = url => router.go(url)
</script>

<template>
  <div class="m-3 container ">
    <div class="left w-3/4">
      <ul>
        <li
          v-for="{ title, url, date, frontmatter, tag } of posts" id="row" :key="url" class="m-1"
          @click="routerPage(url)"
        >
          <article>
            <div id="title" class="m-1 hover:text-#30a9de ">
              {{ title }}
            </div>

            <div id="subTitle">
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
      <HomeRight :tags="tags" @pitch-tag="pitchTag" />
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
  display: flex;
  justify-content: center;
  background-color: var(--center-bg);
  min-height: 100%;
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
  font-weight: 600;
  border: 1px solid rgba(18, 69, 88, 0.01);

  &:hover {
    /* font-weight: 1000; */

    border-radius: 0.375rem;
    border: 1px solid rgba(18, 69, 88, 0.09);
  }
}

#subTitle {
  display: flex;
  font: 0.75em sans-serif;

  & * {
    margin-right: 0.5vb;

  }
}

#intro {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#title {
  font-size: 1em;
  border-radius: 10px;
  font-size: 1.5em;
  border: 1px;

  &:hover {
    filter: contrast(1.1);
  }

  &:active {
    filter: contrast(0.9);
  }

}

@media screen and (max-width: 800px) {

  #line {
    display: flex;
    justify-content: space-between;
    justify-items: left;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-between;
    align-items: center;
    font-size: 1.5em;
    border: 1px
  }

  #date {
    font-size: 1em;
  }
}
</style>
