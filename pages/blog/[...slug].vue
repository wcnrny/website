<template>
  <main class="content-container">
    <img
      v-if="page?.imageUrl"
      :src="page?.imageUrl"
      class="content-cover-image"
    />
    <h1>{{ page?.title }}</h1>
    <div class="information-container">
      <p class="date-container">
        <Icon name="ic:baseline-calendar-month" size="32" /> •
        <span>{{ getDate.toDateString() }}</span>
      </p>
      <!-- Will add tags later. -->
    </div>
    <p class="description">{{ page?.description }}</p>
    <ContentDoc />
    <br />
  </main>
</template>

<script setup lang="ts">
import { Blog } from 'types/Blog';

const { path } = useRoute();
console.log(path);
const { data: page } = await useAsyncData<Blog>(`content-${path}`, () =>
  queryContent(path).findOne()
);
const getDate = new Date(page?.value?.createdAt || Date.now());
</script>

<style lang="scss">
.content-container {
  height: 100%;
  width: 100%;
  color: $text;
  padding-inline: 8rem;
  h1,
  h2,
  h3 {
    font-family: 'Poppins', sans-serif;
  }
  h1 {
    text-align: center;
  }
  p {
    font-family: 'Poppins', sans-serif;
    font-size: larger;
    margin-bottom: 2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    color: $text;
    font-weight: bold;
  }
}
.description {
  text-align: center;
  font-size: larger;
  font-family: 'Poppins', sans-serif;
}
.content-cover-image {
  width: 100%;
  object-fit: cover;
  object-position: top;
  height: 8rem;
  transition: all 1s;
  border-radius: 10px;
  &:hover {
    object-position: center;
    height: 24rem;
  }
}
.information-container {
  display: flex;
  justify-content: space-around;
}
</style>
