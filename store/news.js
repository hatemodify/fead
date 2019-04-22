import axios from 'axios'
import { CATEGORY_API, HEADLINE_API } from '@/utils/api'
const state = () => ({
  headline: [],
  articles: [],
  business: [],
  entertainment: [],
  sports: [],
  science: [],
  health: [],
  general: [],
  category: ''
})

const getters = {
  getArticles (state) {
    return state.articles
  },
  getHeadlines (state) {
    return state.headline
  },
  getCategory (state) {
    return state.category
  }
}
const mutations = {
  addArticles (state, articles, type) {
    state.articles = [...articles]
  },
  addCategory (state, articles, option) {
    state[option] = [...articles]
  },
  addHeadlines (state, articles) {
    state.headline = [...articles]
  },
  removeArticles (state) {
    state.articles = []
  },
  currentCategory (state, payload) {
    state.category = payload
  }
}

const actions = {
  async getArticles ({ commit }, payload) {
    let { data } = await axios.get(CATEGORY_API(payload))
    console.log(data.articles)
    // commit('removeArticles')
    // commit('addArticles', data.articles)
    commit('addCategory', data.articles, state)
    console.log(state)
  },
  async headlineNews ({ commit }) {
    let { data } = await axios.get(HEADLINE_API)
    commit('addHeadlines', data.articles)
  }
}

export default {
  namespase: true,
  state,
  mutations,
  getters,
  actions
}
