<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home • wcnrny',
  meta: [{ name: 'description', content: "wcnrny's Portfolio." }],
  link: [{ rel: 'icon', href: '/logo.png' }],
});
</script>

<style lang="scss">
* {
  scroll-behavior: smooth;
}

main {
  background-color: $background-color;
  max-width: 100vw;
  height: auto;
  min-height: calc(100vh - 4rem);
}
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
