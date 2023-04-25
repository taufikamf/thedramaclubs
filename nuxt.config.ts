// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
      API_URL: "https://thedramaclubs.com/",
      public:{
        API_URL: "https://thedramaclubs.com/"
      }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
