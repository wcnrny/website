<template>
  <div class="navbar-container">
    <NuxtLink to="/" class="navbar-link"><span>wcnrny</span> </NuxtLink>
    <div class="link-container-desktop">
      <NuxtLink to="/" class="link" :class="isActive('/')">Home</NuxtLink>
      <NuxtLink to="/about" class="link" :class="isActive('/about')"
        >About</NuxtLink
      >
      <NuxtLink to="/blog" class="link" :class="isActive('/blog')"
        >Blog</NuxtLink
      >
      <NuxtLink to="/contact" class="link" :class="isActive('/contact')"
        >Contact</NuxtLink
      >
    </div>
    <div class="mobile-menu-button" @click="clicked = !clicked">
      <div class="bar" :class="clicked ? 'active' : null"></div>
      <div class="bar" :class="clicked ? 'active' : null"></div>
    </div>
  </div>
  <div class="link-container-mobile" :class="clicked ? 'show' : null">
    <NuxtLink
      to="/"
      class="link"
      :class="isActive('/')"
      @click="clicked = false"
      >Home</NuxtLink
    >
    <NuxtLink
      to="/about"
      class="link"
      :class="isActive('/about')"
      @click="clicked = false"
      >About</NuxtLink
    >
    <NuxtLink
      to="/blog"
      class="link"
      :class="isActive('/blog')"
      @click="clicked = false"
      >Blog</NuxtLink
    >
    <NuxtLink
      to="/contact"
      class="link"
      :class="isActive('/contact')"
      @click="clicked = false"
      >Contact</NuxtLink
    >
  </div>
</template>

<style lang="scss">
.navbar-container {
  width: 100%;
  padding-inline: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: $background-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;

  .navbar-link {
    display: flex;
    align-items: center;
    height: 68px;
    cursor: pointer;
    text-decoration: none;

    span {
      font-family: 'Poppins', sans-serif;
      font-size: x-large;
      color: $text;
      user-select: none;
    }
  }

  .link-container-desktop {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    @media (max-width: $tablet-size) {
      display: none;
    }

    .link {
      text-decoration: none;
      font-size: large;
      font-family: 'Inter', sans-serif;
      color: $text-light;
      position: relative;
      transition: color 0.3s;

      &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 1px;
        background-color: white;
        bottom: 0;
        left: 0;
        transform-origin: left;
        transition: transform 0.3s;
        transform: scaleX(0);
      }

      &:hover::after {
        transform: scaleX(1);
      }
    }

    .active {
      transition: color 0.3s;
      color: $text;
    }
  }
  .mobile-menu-button {
    display: none;
    width: 2rem;
    flex-direction: column;
    row-gap: 0.5rem;
    transition: transform 0.3s;
    position: relative;
    @media (max-width: $tablet-size) {
      display: flex;
    }

    .bar {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 1px;
      top: 0px;
      background-color: white;
      color: white;
      transition: transform 0.3s;

      &:nth-child(1) {
        transform: translateY(-400%);
      }
      &:nth-child(2) {
        transform: translateY(400%);
      }
    }
    .active {
      &:nth-child(1) {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        transform: rotate(-45deg);
      }
    }
  }
}
.link-container-mobile {
  display: none;
  position: absolute;
  width: 100%;
  flex-direction: column;
  padding-inline: 4rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  transform: scaleY(0);
  transform-origin: top;
  @media (max-width: $tablet-size) {
    display: flex;
  }
  .link {
    text-decoration: none;
    color: $text;
    font-size: x-large;
    font-family: 'Poppins', sans-serif;
  }
}
.show {
  transform: scaleY(1);
}
</style>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import TitleCase from '../../utils/TitleCase.func';
const route = useRoute();
const clicked = ref(false);
const isActive = (href: string) => {
  if (route.path === href) return 'active';
  else return '';
};
</script>
