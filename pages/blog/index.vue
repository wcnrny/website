<template>
  <div class="blog-container">
    <h1>Blog</h1>
    <br />
    <div class="blog-items">
      <NuxtLink v-for="page in pages" class="blog-item" :to="page._path">
        <h2 class="title">{{ page?.title }}</h2>
        <div class="page-info-container">
          <span class="page-description">{{ page?.description }}</span>
          <span>
            <Icon name="ic:baseline-calendar-month" size="32" /> •
            {{
              new Date(page?.value?.createdAt || Date.now()).toDateString()
            }}</span
          >
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.blog-container {
  width: 100%;
  padding-inline: 4rem;
  height: auto;
  color: $text;

  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 200;
  }
  .blog-items {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  .blog-item {
    text-decoration: none;
    background-color: $secondary-background-color;
    padding-inline: 4rem;
    width: 100%;
    color: $text;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding-top: 1rem;
    font-size: larger;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px $border-color solid;
    transition: background-color 0.1s;
    &:hover {
      background-color: #202020;
    }
    h2 {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }
    .page-description {
      font-family: 'Inter', sans-serif;
      font-weight: 200;
    }
    .page-info-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: $tablet-size) {
        flex-direction: column;
        align-items: normal;
        justify-content: baseline;
      }
    }
    @media (max-width: $tablet-size) {
      padding-inline: 1rem;
      h2 {
        font-size: medium;
      }
    }
  }
}
</style>

<script setup lang="ts">
const { path } = useRoute();
const { data: pages } = await useAsyncData(`content-${path}`, () =>
  queryContent(path).find()
);
useHead({
  title: 'Blog • wcnrny',
  meta: [{ name: 'description', content: "wcnrny's Portfolio." }],
  link: [{ rel: 'icon', href: '/logo.png' }],
});
</script>
