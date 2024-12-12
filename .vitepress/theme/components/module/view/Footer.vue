<script setup>
import { useData, useRouter } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>

  <footer class="footer footer-center text-base-content p-4">
    <aside>
      <p>
        <a href="https://github.com/guzzhao/myBlog" class="ml-5">theme</a> with vitepress
      </p>
      <p>
        {{ frontmatter.footer }}
      </p>
    </aside>
  </footer>


</template>

<style scoped></style>
