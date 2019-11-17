<template>
  <header class="header" :class="{'header--home': isHome }">
    <div class="container">
      <div class="header__left">
        <n-link class="header__logo glitch--hover" data-text="Now Playing" to="/" title="Homepage">Now Playing</n-link>
        <div class="header__tagline">
          Great music should be shared
        </div>
      </div>
      <nav class="navigation" :class="{'active': isMenuOpen }">
        <n-link class="navigation__item active" @click.native="menuClose" to="/">Latest</n-link>
        <button class="navigation__item" @click="randomAlbum">Random</button>
      </nav>
      <div class="navigation__mobileOverlay" :class="{'active': isMenuOpen }" @click="menuSwitch" />
      <button class="navigation__mobileBtn" @click="menuSwitch">
        Menu
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isMenuOpen: false
    }
  },
  computed: {
    isHome () {
      return this.$route.fullPath === '/'
    }
  },
  watch: {
    '$route' () {
      this.isMenuOpen = false
    }
  },
  methods: {
    randomAlbum () {
      const urls = this.$store.state.music.map((music) => {
        return music.slug
      })
      const slug = urls[Math.floor(Math.random() * Math.floor(urls.length))]
      this.$router.push('/musics/' + slug)
    },
    menuSwitch () {
      this.isMenuOpen = !this.isMenuOpen
    },
    menuClose () {
      this.isMenuOpen = false
    }
  }
}
</script>
