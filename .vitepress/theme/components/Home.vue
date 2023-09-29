<script setup>
import { computed, ref } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'
import { data as postsAll } from '../posts.data'

const data = useData()
const router = useRouter()

const posts = ref([...postsAll])

const tagRef = ref(null)
const tags = [...new Set(postsAll.map(e => e.tag))]

const pageIndex = ref(1)
const pageSize = ref(5)

const maxPage = computed(() => {
  return Math.ceil(posts.value.length / pageSize.value)
})

const page = computed(() => {
  return posts.value.slice((pageIndex.value - 1) * pageSize.value, pageIndex.value * pageSize.value)
})

function updatePage(i) {
  pageIndex.value = pageIndex.value + i
}

function changePageSize() {
  pageIndex.value = 1
  pageSize.value = pageSize.value === 5 ? 50 : 5
}

const pageText = computed(() => {
  return `1...[${(pageIndex.value - 1) * pageSize.value + 1},${pageIndex.value * pageSize.value}]...${posts.value.length}`
})

function pitchTag(tag) {
  pageIndex.value = 1
  if (!tag || tag === tagRef.value) {
    posts.value = postsAll
    tagRef.value = null
  } else {
    tagRef.value = tag
    posts.value = postsAll.filter(e => e.tag === tag)
  }
}

const routerPage = url => router.go(url)
</script>

<template>
  <div id="out">
    <div id="head" @click="() => pitchTag()">
      {{ data.frontmatter.value.title }}
    </div>

    <div id="tags">
      <div v-for="tag in tags" :key="tag" @click="pitchTag(tag)">
        {{ tag }}
      </div>
    </div>

    <div id="container">
      <ul style="width: 100%;">
        <li v-for="{ title, url, date, frontmatter, tag } of page" id="row" :key="url" @click="routerPage(url)">
          <article>
            <div id="title" class="m-3">
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

    <footer id="footer">
      <div style="width: 50px;">
        <button v-if="pageIndex > 1" @click="updatePage(-1)">
          上一页
        </button>
      </div>

      <div id="pageText" @click="changePageSize">
        {{ pageText }}
      </div>

      <div style="width: 50px;">
        <button v-if="pageIndex < maxPage" @click="updatePage(1)">
          下一页
        </button>
      </div>
    </footer>
  </div>
</template>

<style scoped>
#out {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  align-items: center;
}

#head {
  align-self: baseline;
  padding: 5vb;
  font-size: 5em;
  cursor: default;
}

#footer {
  width: 50%;
  display: flex;
  justify-content: space-between;

}

#container {
  width: 50%;
  min-height: 2vh;
  display: flex;
  justify-content: center;
}

#tags {
  cursor: default;
  display: flex;
}

#row {
  cursor: pointer;
  padding: 1vb;
  font-weight: 600;
  border-bottom: 1px solid rgba(18, 69, 88, 0.086);

  &:hover {
    font-weight: 1000;
    border-bottom: 1px solid rgba(18, 69, 88, 0.349);
  }
}

#pageText {
  cursor: pointer;
}

#subTitle {
  display: flex;
  font: 0.7em sans-serif;

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
  font-size: 20px;
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
