// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@nuxt/content'],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/css/globals/_colors.scss" as *;@use "@/assets/css/globals/_body.scss" as *;@use "@/assets/css/globals/_fonts.scss" as *;@use "@/assets/css/globals/_scrollbar.scss";',
        },
      },
    },
  },
  content: {
    highlight: {
      theme: 'material-palenight',
    },
  },
});
