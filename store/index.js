import axios from 'axios'
export const state = () => ({
  preloader: false,
  searchState: false,
  searchQuery: '',
  login: false,
  userInfo: {},
  interest: [],
  scrap: []
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
  },
  setScrap (state, payload) {
    const scrap = state.scrap
    state.scrap = [scrap, ...payload]
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
  getInterest (state) {
    return state.interest
  },
  getScrap (state) {
    return state.scrap
  }
}

export const actions = {
  async getUserInfo ({}, payload) {
    const userInfo = await axios.post(`/userInfo`, payload)
  },
  async getInterest ({ state }) {
    const interest = await axios.get(`/interest/${state.userInfo.Eea}`)
    console.log(interest)
    // mutations.setInterest(interest)
  },
  async addBookmark ({ state }, payload) {
    const bookmark = await axios.put(
      `addbookmark/${state.userInfo.Eea}`,
      payload
    )
  },
  async getScrapList ({ commit, state }) {
    const scrap = await axios.get(`scrap/${state.userInfo.Eea}`)
    console.log(scrap.data)
    commit('setScrap', scrap.data)
  }
}
