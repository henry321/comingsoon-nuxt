// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    '~/components',
    //{ path: '~/components/daisyUI', prefix: 'DaisyUI' },

  
  ],
  css: [
    '@/assets/css/main.css',
  ],
  // buildModules: ['nuxt-use-motion'],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
   ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
 
  
  app: {
    pageTransition: { name: 'page' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'blecksaudio.',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description',content: 'We build software instruments for Kontakt.' },
        { name: 'url',content: 'https://blecksaudio.de' },
        { name: 'image',content: 'https://blecksaudio.fra1.digitaloceanspaces.com/public-assets/images/StudioPicture_22120702.jpg' },


        { hid: 'og-title', property: 'og:title', content: 'blecksaudio.' },
        { hid: 'og-desc', property: 'og:description', content: 'We build software Instruments for Kontakt.' },
        { hid: 'og-url', property: 'og:url',content: 'https://blecksaudio.de' },
        { hid: 'og-image', property: 'og:image',content: 'https://blecksaudio.fra1.digitaloceanspaces.com/public-assets/images/StudioPicture_22120702.jpg' }

      ],
    }
  },
  
  
  nitro: {
    //plugins: ["~/server/index.ts"],
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }
})
