// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/css/globals/_colors.scss" as *;@use "@/assets/css/globals/_body.scss" as *;@use "@/assets/css/globals/_fonts.scss" as *;',
        },
      },
    },
  },
});