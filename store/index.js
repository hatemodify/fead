export const state = () => ({
  preloader: false,
  searchQuery: ''
})

export const mutations = {
  setPreloader (state, payload) {
    state.preloader = payload
  },
  setSearchQuery (state, payload) {
    state.searchQuery = payload
  }
}

export const getters = {
  getPreloader (state) {
    return state.preloader
  },
  getSearchQuery (state) {
    return state.searchQuery
  }
}
