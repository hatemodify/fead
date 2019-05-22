export const state = () => ({
  preloader: false,
  searchState: false,
  searchQuery: ''
})

export const mutations = {
  setPreloader (state, payload) {
    state.preloader = payload
  },
  setSearchState (state, payload) {
    const key = Object.keys(payload)
    state[key] = payload[key]
  }
}

export const getters = {
  getPreloader (state) {
    return state.preloader
  },
  getSearchQuery (state) {
    return state.searchQuery
  },
  getSearchState (state) {
    return state.searchState
  }
}
