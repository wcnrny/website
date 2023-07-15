<template>
  <div class="about-container">
    <h2>Who am i?</h2>
    <p>
      I'm Furkan, {{ age }} years old self-taught full-stack web developer. I
      work on personal and private projects.
    </p>
    <p>
      I generally build backend applications with Nest.Js to improve myself on
      backend. But I started learning C# for game development and backend
      servers. So maybe in the future, I'll use C# as a backend instead of
      Nest.Js.
    </p>
    <h2>What I do?</h2>
    <p>
      I began working on my old projects such as Lycrose (a Discord Bot).
      Because of the O level exam on my country, I couldn't work on that.
    </p>
    <p>
      Now I am preparing myself on university and new life. Maybe it will be
      hard but that's the life right?
    </p>
    <h2>My School Life</h2>
    <p>
      I studied on my local primary and secondary schools. Then I went to social
      science high school in my country, Eskişehir. I was in high school for 5
      years because of prep class. But that's okay.
    </p>
    <p>
      Now I entered the O level exam called "YKS". Even though I don't know how
      I scored, I'm a little excited.
    </p>
    <p>
      For my own privacy, I cannot name the schools that I went. Sorry about
      that.
    </p>
    <h2>My Plans</h2>
    <p>
      Even though I don't have much big plans, I want to build my own Chromium
      browser, my own Arch-Based Linux Operating System and I want to make a
      game.
    </p>
    <p>
      And I want to make Docker-alternative application written in Rust. So the
      next plan is to learn Rust actually.
    </p>
  </div>
</template>

<script setup lang="ts">
const YEAR_MILLIS = 31556952000;
const Birthday = new Date(2004, 11, 12);
const age = Math.floor((Date.now() - Birthday.getTime()) / YEAR_MILLIS);
</script>

<style lang="scss">
.about-container {
  width: 100%;
  padding-inline: 4rem;
  height: auto;
  min-height: 100vh;
  color: $text;
  background-color: $background-color;

  h1,
  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
  }
  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: large;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
