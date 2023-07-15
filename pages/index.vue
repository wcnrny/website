<template>
  <div class="landing-container">
    <div class="landing-welcome">
      <span>Furkan, wcnrny</span>
      <h1>Self-taught full-stack developer.</h1>
      <div class="buttons">
        <NuxtLink v-for="icon in Icons" to="#skills"
          ><Button text="" :icon="icon"
        /></NuxtLink>
      </div>
    </div>
    <div class="highlights-container">
      <div class="box">
        <Icon
          name="material-symbols:rocket-launch-outline"
          size="48"
          class="box-icon"
        />
        <span>Over 2+ years of experience with JavaScript & TypeScript</span>
      </div>
      <div class="box">
        <Icon name="material-symbols:dashboard" size="48" class="box-icon" />
        <span>Building full-stack applications with newest technologies</span>
      </div>
      <div class="box">
        <Icon name="ant-design:stock-outlined" size="48" class="box-icon" />
        <span>Learning new programming languages and improving myself</span>
      </div>
    </div>
    <br />
    <div id="me">
      <h1>Me</h1>
      <br />
      <div class="pages-container">
        <NuxtLink class="page-item" v-for="page in Pages" :to="page.to">
          <h3>{{ page.title }}</h3>
          <span>{{ page.description }}</span>
        </NuxtLink>
      </div>
    </div>
    <br />
    <div id="skills">
      <h1>Skills</h1>
      <br />
      <div class="skills-container">
        <div v-for="skill in Skills" class="skill-item">
          <h3><Icon :name="skill.icon" /> {{ skill.title }}</h3>
          <span> {{ skill.type }} • {{ skill.experience }} </span>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script setup lang="ts">
enum SkillType {
  LANGUAGE = 'Language',
  FRAMEWORK = 'Framework',
  TOOL = 'Tool',
  DATABASE = 'Database',
}
const Icons = ['logos:typescript-icon', 'logos:javascript', 'logos:nuxt-icon'];
const Pages = [
  {
    title: 'About Me',
    description: 'Wanna learn something about me? Come check this.',
    to: '/about',
  },
  {
    title: 'Repositories',
    description: 'Check out my repositories on Github.',
    to: 'https://github.com/wcnrny?tab=repositories',
  },
  {
    title: 'Contact',
    description: 'Wanna chat or work with me? Contact with me then!',
    to: '/contact',
  },
  {
    title: 'Blog',
    description: "Check out my blog. I'll post there frequently.",
    to: '/blog',
  },
];
const Skills = [
  {
    title: 'JavaScript',
    type: SkillType.LANGUAGE,
    experience: '2+ Years',
    icon: 'logos:javascript',
  },
  {
    title: 'TypeScript',
    type: SkillType.LANGUAGE,
    experience: '2+ Years',
    icon: 'logos:typescript-icon',
  },
  {
    title: 'HTML',
    type: SkillType.LANGUAGE,
    experience: '2+ Years',
    icon: 'devicon:html5',
  },
  {
    title: 'CSS',
    type: SkillType.LANGUAGE,
    experience: '2+ Years',
    icon: 'vscode-icons:file-type-css',
  },
  {
    title: 'C#',
    type: SkillType.LANGUAGE,
    experience: 'Still Learning',
    icon: 'devicon:csharp',
  },
  {
    title: 'SQL',
    type: SkillType.LANGUAGE,
    experience: 'Still Learning',
    icon: 'tabler:sql',
  },
  {
    title: 'Nest.JS',
    type: SkillType.FRAMEWORK,
    experience: '1 Year',
    icon: 'logos:nestjs',
  },
  {
    title: 'React',
    type: SkillType.FRAMEWORK,
    experience: '1+ Year',
    icon: 'logos:react',
  },
  {
    title: 'Next.JS',
    type: SkillType.FRAMEWORK,
    experience: '1+ Year',
    icon: 'teenyicons:nextjs-solid',
  },
  {
    title: 'Nuxt',
    type: SkillType.FRAMEWORK,
    experience: 'Still Learning',
    icon: 'logos:nuxt-icon',
  },
  {
    title: 'Vue',
    type: SkillType.FRAMEWORK,
    experience: 'Still Learning',
    icon: 'logos:vue',
  },
  {
    title: 'Tailwind CSS',
    type: SkillType.FRAMEWORK,
    experience: '1+ Year',
    icon: 'vscode-icons:file-type-css',
  },
  {
    title: 'Postgres',
    type: SkillType.DATABASE,
    experience: 'Still Learning',
    icon: 'akar-icons:postgresql-fill',
  },
  {
    title: 'MongoDB',
    type: SkillType.DATABASE,
    experience: '1+ Year (no longer using)',
    icon: 'vscode-icons:file-type-mongo',
  },
];
</script>

<style lang="scss">
.landing-container {
  width: 100%;
  padding-inline: 4rem;
  height: auto;
  color: $text;

  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    font-size: xx-large;
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: large;
  }
}

.landing-welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 4rem);
}

.buttons {
  display: flex;
  column-gap: 0.8rem;
}

.highlights-container {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  @media (max-width: $tablet-size) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .box {
    width: auto;
    border-radius: 3px;
    height: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
    background-color: #202020;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-inline: 1rem;

    span {
      font-family: 'Inter', sans-serif;
      text-align: center;
      text-overflow: clip;
    }

    .box-icon {
      height: 4rem;
    }
  }
}

.pages-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  @media (max-width: $tablet-size) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .page-item {
    text-decoration: none;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-inline: 1rem;
    background-color: $secondary-background-color;
    h3 {
      font-family: 'Poppins', sans-serif;
      color: $text;
    }
    span {
      font-family: 'Inter', sans-serif;
      color: $text-light;
    }
  }
}

#skills {
  .skills-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 1rem;
    @media (max-width: $tablet-size) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
    .skill-item {
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-inline: 0.5rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      user-select: none;
      transition: all 0.3s;
      cursor: pointer;
      border-radius: 4px;
      span {
        font-family: 'Inter', sans-serif;
      }
      &:hover {
        transform: scale(1.01);
        background-color: $secondary-background-color;
      }
    }
  }
}
</style>
