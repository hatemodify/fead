export const state = () => ({
  preloader: false,
  searchState:{
    query:'',
    isOpen:false
  }
})

export const mutations = {
  setPreloader (state, payload) {
    state.preloader = payload
  },
  setSearchState (state, payload) {
    state.searchState = {payload}
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
