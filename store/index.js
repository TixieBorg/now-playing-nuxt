export const state = () => ({
  music: []
})

export const mutations = {
  fillMusic (state, list) {
    state.music = list
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const files = await require.context('~/assets/content/music/', false, /\.json$/)
    const albums = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    albums.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
    await commit('fillMusic', albums)
  }
}
