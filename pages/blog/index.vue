<template>
  <div class="blog-container">
    <h1>I will build this later. I'm bored as hell, I'll play Brawlhalla.</h1>
  </div>
</template>

<style lang="scss">
.blog-container {
  width: 100%;
  padding-inline: 4rem;
  height: auto;
  color: $text;

  h1,
  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 200;
  }
}
</style>

<script setup lang="ts">
useHead({
  title: 'Blog • wcnrny',
  meta: [{ name: 'description', content: "wcnrny's Portfolio." }],
  link: [{ rel: 'icon', href: '/logo.png' }],
});
</script>
