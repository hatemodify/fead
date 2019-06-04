export const state = () => ({
  preloader: false,
  searchState: false,
  searchQuery: '',
  login: false,
  userInfo: {}
})

export const mutations = {
  setPreloader (state, payload) {
    state.preloader = payload
  },
  setSearchState (state, payload) {
    const key = Object.keys(payload)
    state[key] = payload[key]
  },
  loginState (state) {
    state.login = !state.login
  },
  setUserInfo (state, payload) {
    state.userInfo = { ...payload }
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
  },
  getLoginState (state) {
    return state.login
  },
  getUserInfo (state) {
    return state.userInfo
  }
}
