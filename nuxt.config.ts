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
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://blecksaudio.de`
        }
      ],
    
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'blecksaudio. | Virtual Instruments for Kontakt',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description',content: 'We build software instruments for musicians, composers, producers & sound designers.' },
        { name: 'url',content: 'https://blecksaudio.de' },
        { name: 'image',content: 'https://blecksaudio.fra1.digitaloceanspaces.com/public-assets/LOGO_BG_BLACK_23111001.png' },


        { hid: 'og-title', property: 'og:title', content: 'blecksaudio.' },
        { hid: 'og-desc', property: 'og:description', content: 'We build software instruments for musicians, composers, producers & sound designers.' },
        { hid: 'og-type', property: 'og:type', content: 'website' },

        { hid: 'og-url', property: 'og:url',content: 'https://blecksaudio.de' },
        { hid: 'og-image', property: 'og:image',content: 'https://blecksaudio.fra1.digitaloceanspaces.com/public-assets/LOGO_BG_BLACK_23111001.png' }

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
