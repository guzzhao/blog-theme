<script setup>
import { useData } from 'vitepress'
import DateShow from './DateShow.vue'

const { frontmatter } = useData()
</script>

<template>
  <div id="main">
    <div id="h1">
      {{ frontmatter.title }}
    </div>
    <div>
      {{ frontmatter.tag }}
      <DateShow id="date" :date="frontmatter.date" />
    </div>
  </div>
</template>

<style scoped>
#main{
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vh;

}

#h1{
  font-size: 2em;
  height: 7vh

}

#date{
  font: 2em;
  /* align-self: flex-end; */
}
</style>
