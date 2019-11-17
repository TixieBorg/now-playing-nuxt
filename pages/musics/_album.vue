<template>

  <main>
    <div class="album">
      <div class="container">
        <div class="album-layout">
          <div class="album-cover">
            <img
              class="album-cover__visual"
              width="500"
              height="500"
              :style="`background-color: ${albumColor};`"
              :src="albumMedium"
              :srcset="`${albumSmall} 250w,
                      ${albumMedium} 1x,
                      ${albumBig} 2x`"
              :alt="`${album.title} album's cover`"
              title=":)"
            >
          </div>
          <div class="album-infos">
            <h1 class="album-name">{{ album.title }}</h1>
            <strong class="album-artist">by {{ album.artist }}</strong>
            <ul class="album-tags" v-if="album.styles">
              <li class="album-tags__item" v-for="(style, index) in album.styles" :key="index">{{ style }}</li>
            </ul>

            <div class="album-links">
              <div v-if="isNoLink">
                Listen on&nbsp;:
                There are no links (for now~)
              </div>
              <div v-else class="album-links__list">
                <template v-if="album.links.spotify">
                  <a class="album-links__item tooltip tooltip--bottom" aria-label="Spotify" data-tooltip="Spotify" :href="album.links.spotify" target="_blank" rel="noreferrer">
                    <icon-spotify />
                  </a>
                </template>
                <template v-if="album.links.youtube">
                  <a class="album-links__item tooltip tooltip--bottom" aria-label="Youtube" data-tooltip="Youtube" :href="album.links.youtube" target="_blank" rel="noreferrer">
                    <icon-youtube />
                  </a>
                </template>
                <template v-if="album.links.appleMusic">
                  <a class="album-links__item tooltip tooltip--bottom" aria-label="Apple Music" data-tooltip="Apple Music" :href="album.links.applemusic" target="_blank" rel="noreferrer">
                    <icon-apple-music />
                  </a>
                </template>
                <template v-if="album.links.soundcloud">
                  <a class="album-links__item tooltip tooltip--bottom" aria-label="Soundcloud" data-tooltip="Soundcloud" :href="album.links.soundcloud" target="_blank" rel="noreferrer">
                    <icon-soundcloud />
                  </a>
                </template>
                <template v-if="album.links.bandcamp">
                  <a class="album-links__item tooltip tooltip--bottom" aria-label="Bandcamp" data-tooltip="Bandcamp" :href="album.links.bandcamp" target="_blank" rel="noreferrer">
                    <icon-bandcamp />
                  </a>
                </template>
                <template v-if="album.links.googlePlay">
                  <a class="album-links__item tooltip tooltip--bottom" aria-label="Google Play" data-tooltip="Google Play" :href="album.links.googleplay" target="_blank" rel="noreferrer">
                    <icon-google-play />
                  </a>
                </template>
                <template v-if="album.links.deezer">
                  <a class="album-links__item tooltip tooltip--bottom" aria-label="Deezer" data-tooltip="Deezer" :href="album.links.deezer" target="_blank" rel="noreferrer">
                    <icon-deezer />
                  </a>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import IconAppleMusic from '@/components/social/apple-music'
import IconBandcamp from '@/components/social/bandcamp'
import IconDeezer from '@/components/social/deezer'
import IconGooglePlay from '@/components/social/google-play'
import IconSoundcloud from '@/components/social/soundcloud'
import IconSpotify from '@/components/social/spotify'
import IconYoutube from '@/components/social/youtube'

export default {
  name: 'Album',
  components: {
    IconAppleMusic,
    IconBandcamp,
    IconDeezer,
    IconGooglePlay,
    IconSoundcloud,
    IconSpotify,
    IconYoutube
  },
  head () {
    return {
      title: `${this.album.title} by ${this.album.artist} ∴ Glitch Family`,
      meta: [
        { hid: 'description', name: 'description', content: 'Listen to this album on Now Playing' },
        // Opengraph
        { hid: 'og:type', property: 'og:type', content: 'music.album' },
        { hid: 'og:title', property: 'og:title', content: `${this.album.title} by ${this.album.artist} ∴ Glitch Family` },
        { hid: 'og:description', property: 'og:description', content: 'Listen to this album on Now Playing' },
        { hid: 'og:url', property: 'og:url', content: (process.env.URL || '') + this.$route.fullPath },
        { hid: 'og:image', property: 'og:image', content: this.albumMedium },
        { hid: 'og:image:width', property: 'og:image:width', content: '500' },
        { hid: 'og:image:height', property: 'og:image:height', content: '500' },
        { hid: 'music:musician', property: 'og:musician', content: this.album.artist },
        { hid: 'music:song:url', property: 'music:song:url', content: (process.env.URL || '') + this.$route.fullPath },
        // Twitter Card
        { hid: 'twitter:title', property: 'twitter:title', content: `${this.album.title} by ${this.album.artist} ∴ Glitch Family` },
        { hid: 'twitter:description', property: 'twitter:description', content: 'Listen to this album on Now Playing' },
        { hid: 'twitter:image', property: 'twitter:image', content: this.albumMedium }
      ]
    }
  },

  computed: {
    albumColor () {
      return require(`assets/uploaded/${this.album.cover}?lqip-colors`)[0]
    },
    albumSmall () {
      return require(`assets/uploaded/${this.album.cover}?resize&size=250`)
    },
    albumMedium () {
      return require(`assets/uploaded/${this.album.cover}?resize&size=500`)
    },
    albumBig () {
      return require(`assets/uploaded/${this.album.cover}?resize&size=1000`)
    },
    isNoLink () {
      return !Object.values(this.album.links).some(link => link)
    }
  },
  async asyncData ({ params, payload }) {
    if (payload) return { album: payload }
    else {
      return {
        album: await require(`~/assets/content/music/${params.album}.json`)
      }
    }
  }
}
</script>
