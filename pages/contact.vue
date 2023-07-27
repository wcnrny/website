<template>
  <div class="contact-container">
    <h1>Contact via Social Media Platforms</h1>
    <br />
    <div class="social-media-container">
      <NuxtLink
        v-for="plat in Platforms"
        :to="plat.url"
        class="social-media-item"
      >
        <span><Icon :name="plat.icon" size="24" /> {{ plat.title }}</span>
      </NuxtLink>
    </div>
    <br />
    <h2>Or you can just send me an email</h2>
    <br />
    <NuxtLink to="mailto:wcnrny@proton.me" class="send-email-button"
      >Send E-mail</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
const Platforms = [
  {
    title: 'Discord',
    url: 'https://discord.com/users/320947934847827978',
    icon: 'ic:baseline-discord',
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/wcnrnyofficial',
    icon: 'mdi:twitter',
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/wcnrny',
    icon: 'mdi:instagram',
  },
  {
    title: 'Snapchat',
    url: 'https://www.snapchat.com/add/wcnrnyofficial',
    icon: 'ic:baseline-snapchat',
  },
  {
    title: 'Reddit',
    url: 'https://www.reddit.com/user/wcnrny',
    icon: 'bi:reddit',
  },
];
useHead({
  title: 'Contact • wcnrny',
  meta: [{ name: 'description', content: "wcnrny's Portfolio." }],
  link: [{ rel: 'icon', href: '/logo.png' }],
});
</script>

<style lang="scss">
.contact-container {
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
.social-media-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  @media (max-width: $tablet-size) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .social-media-item {
    text-decoration: none;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: x-large;
    color: $text;
    padding-inline: 2rem;
    border: 1px solid $border-color;
    border-radius: 4px;
    background-color: $secondary-background-color;
    transition: background-color 0.1s;
    &:hover {
      background-color: #202020;
    }
  }
}
.send-email-button {
  text-decoration: none;
  color: $text;
  margin-top: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-inline: 2rem;
  background-color: $secondary-background-color;
  font-family: 'Poppins', sans-serif;
  border-radius: 5px;
  &:hover {
    background-color: #191919;
  }
}
</style>
