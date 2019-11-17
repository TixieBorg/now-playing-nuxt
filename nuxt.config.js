export default {
  mode: 'universal',
  env: {
    baseUri: process.env.URL || null
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '🚧Now Playing ∴ Handpicked Albums by the Glitch Family',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Great music should be shared' },
      { name: 'msapplication-TileColor', content: '#0e1848' },
      { name: 'theme-color', content: '#0e1848' },
      // Opengraph
      { hid: 'og:title', property: 'og:title', content: 'Now Playing ∴ Great music should be shared' },
      { hid: 'og:description', property: 'og:description', content: 'Handpicked Albums by the Glitch Family' },
      { hid: 'og:url', property: 'og:url', content: (process.env.URL || '') + '/' },
      { hid: 'og:image', property: 'og:image', content: (process.env.URL || '') + '/favicons/android-chrome-512x512.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '512' },
      { hid: 'og:image:height', property: 'og:image:height', content: '512' },
      // Twitter Card
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Now Playing ∴ Great music should be shared' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Handpicked Albums by the Glitch Family' },
      { hid: 'twitter:image', property: 'twitter:image', content: (process.env.URL || '') + '/favicons/android-chrome-512x512.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: (process.env.URL || '') + '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: (process.env.URL || '') + '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: (process.env.URL || '') + '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: (process.env.URL || '') + '/favicons/site.webmanifest' },
      { rel: 'mask-icon', color: '#ff2749', href: (process.env.URL || '') + '/favicons/safari-pinned-tab.svg' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff2749' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@bazzite/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.output.publicPath = (process.env.URL || '') + '/_nuxt/'
    }
  },
  /*
  ** Generate configuration
  */
  generate: {
    routes () {
      const fs = require('fs')
      return fs.readdirSync('./assets/content/music').map((file) => {
        return {
          route: `/musics/${file.slice(0, -5)}`, // Remove the .json from the end of the filename
          payload: require(`./assets/content/music/${file}`)
        }
      })
    }
  }
}
