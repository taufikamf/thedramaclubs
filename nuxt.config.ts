// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
      API_URL: process.env.WP_URL,
      VERCEL_URL: process.env.VERCEL_URL,
      PAGE_TITLE: process.env.PAGE_TITLE,
      public:{
        API_URL: process.env.WP_URL,
        VERCEL_URL: process.env.VERCEL_URL,
        PAGE_TITLE: process.env.PAGE_TITLE
      }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    modules: [
      [
        '@pinia/nuxt',
        {
          autoImports: ['defineStore', 'acceptHMRUpdate'],
        },
      ],
    ],
    imports: {
      dirs: ['stores'],
    },
    router:{
      middleware: [
        'posts',
        'client',
      ]
    },
    nitro: {
      storage: {
        'redis': {
          driver: 'redis',
          /* redis connector options */
          port: 6379, // Redis port
          host: "127.0.0.1", // Redis host
          username: "", // needs Redis >= 6
          password: "",
          db: 0, // Defaults to 0
          tls: {} // tls/ssl
        }
      }
    }
})
