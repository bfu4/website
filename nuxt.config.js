export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nodden',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { hid: 'description', name: 'description', content: '' },
      { name: 'theme-color', content: '#b8a2c4' },
      { property: 'og:title', content: 'nodden' },
      { property: 'og:author', content: 'nodden.org' },
      { property: 'og:url', content: 'https://nodden.org' },
      { property: 'og:image', content: 'https://avatars.githubusercontent.com/u/76267446' }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/circlenodden.png'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@static/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/font-awesome-pl.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/bulma',
    ['@nuxtjs/fontawesome', {
      component: 'font-awesome-icon',
      suffix: true,
      icons: {
        brands: true,
        solid: true
      }
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  content: {
    liveEdit: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}

