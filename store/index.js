import axios from 'axios'
export const state = () => ({
  preloader: false,
  searchState: false,
  searchQuery: '',
  login: false,
  userInfo: {},
  interest: []
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
  },
  setInterest (state, payload) {
    state.interest = payload
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
  },
  getInt (state) {
    return state.interest
  }
}

export const actions = {
  async getUserInfo ({}, payload) {
    const userInfo = await axios.post(`/userInfo`, payload)
  },
  async getInterest ({ state }) {
    const interest = await axios.get(`/interest/${state.userInfo.Eea}`)
    mutations.setInterest(interest)
  }
}
