// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint', 
    '@nuxt/image', 
    '@nuxt/test-utils', 
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css', 
          crossorigin: 'anonymous' 
        }
      ]
    }
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
})