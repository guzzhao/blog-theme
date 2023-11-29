<script setup>
import { useRouter } from 'vitepress'
import { data as postsAll } from '../posts.data'
import DateShow from './module/DateShow.vue'
import BackToTop from './module/BackToTop.vue'

const router = useRouter()

const posts = ref([...postsAll])
const tagRef = ref(null)
const tags = [...new Set(postsAll.map(e => e.tag))]

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
  <!-- <div id="head" @click="() => pitchTag()">
    {{ data.frontmatter.value.title }}
  </div> -->
  <div id="out">
    <div id="container" class="m-3">
      <ul style="width: 100%;">
        <li
          v-for="{ title, url, date, frontmatter, tag } of posts" id="row" :key="url" class="m-1"
          @click="routerPage(url)"
        >
          <article>
            <div id="title" class="m-1">
              {{ title }}
            </div>
            <div id="subTitle">
              <DateShow id="date" :date="date.time" />
              <div>
                {{ tag }}
              </div>
              <div id="intro">
                {{ frontmatter.intro }}
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </div>

  <BackToTop />
  <div id="tags">
    <div v-for="tag in tags" :key="tag" :class="{ actice: tagRef === tag }" @click="pitchTag(tag)">
      {{ tag }}
    </div>
  </div>
</template>

<style scoped>
#out {
  width: 80%;
  margin: 2vh auto;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  align-items: center;
  background-color: var(--center-bg);
  border-radius: var(--center-radius)

}

#head {
  float: left;
  align-self: baseline;
  padding: 5vb;
  font-size: 5em;
  cursor: default;
}

#container {
  width: 90%;
  min-height: 2vh;
  display: flex;
  justify-content: center;
  background-color: var(--center-bg);

}

#tags {
  position: fixed;
  top: 40vh;
  left: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .actice,:hover {
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
    font-weight: 1000;
    border-radius: 0.375rem;
    border: 1px solid rgba(18, 69, 88, 0.1);
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

  #head {
    float: left;
    align-self: center;
    padding: 5vb;
    font-size: 5em;
  }

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
