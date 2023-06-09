// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'cloudflare-pages',
    rollupConfig: {
      external: ['ws']
    },
    minify: false
  },
  build: {
    transpile: ['pg']
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  css: [
    '~/assets/css/style.css'
  ],
  // TODO: Documentation says this should be named "head", but with that name it doesn't work.
  app: {
    head: {
      title: 'Jagu Nuxt template',
      // TODO: Add your own fonts (change in assets/css/style.css as well).
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ]
    },
  },
  runtimeConfig: {
    dbUrl: process.env.NUXT_DB_URL || ''
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  }
})
