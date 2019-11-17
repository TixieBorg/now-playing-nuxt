<template>
  <main>
    <div class="home-head">
      <div class="container">
        <div class="home-head__container">
          <h1 class="home-head__title" data-text="Handpicked Albums">
            <span class="glitch" data-text="Handpicked">Handpicked</span> <span class="glitch" data-text="Albums">Albums</span>
          </h1>
          <p class="home-head__subtitle">by the Glitch Family</p>
        </div>
      </div>
    </div>

    <!-- Album list -->
    <div class="content">
      <div class="container">
        <div class="grid grid-catalog" v-if="albums">
          <div class="catalog-item" v-for="(album, index) in albums" :key="index">
            <n-link class="catalog-item__content" :to="'/musics/' + album.slug">
              <h2 class="catalog-item__album">{{ album.title }}</h2>
              <div class="catalog-item__artist">by {{ album.artist }}</div>
              <img
                class="catalog-item__visual"
                width="320"
                height="320"
                :style="`background-color: ${albumColor(album.cover)};`"
                :src="albumUrl(album.cover)"
                :srcset="albumUrl(album.cover) + ' 1x, ' + albumUrl2x(album.cover) + ' 2x'"
                :alt="album.title + ' album\'s cover'"
                :title="album.title + ' album\'s cover'"
              >
            </n-link>
          </div>
        </div>
        <div v-else>
          No album
        </div>
      </div>
    </div>
    <!-- About  -->
    <section class="home-about">
      <div class="container">
        <h2 class="visually-hidden">About</h2>
        <p>At Glitch Family we love music, I mean we LOVE music! And we also LOVE great album covers. So we decided to make a place where we can showcase albums that are dear to us.</p>
        <p>
          This is Now Playing.<br>
          A Glitch Family’s project.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      env: null
    }
  },
  head () {
    return {
      meta: [
        // { hid: 'og:url', property: 'og:url', content: this.$route.fullPath }
      ]
    }
  },
  computed: {
    albums () {
      return this.$store.state.music
    }
  },
  methods: {
    albumColor (url) {
      return require(`assets/uploaded/${url}?lqip-colors`)[0]
    },
    albumUrl (url) {
      return require(`assets/uploaded/${url}?resize&size=320`)
    },
    albumUrl2x (url) {
      return require(`assets/uploaded/${url}?resize&size=640`)
    }
  }
}
</script>
