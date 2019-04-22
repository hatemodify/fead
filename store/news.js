import axios from 'axios'
import { CATEGORY_API, HEADLINE_API } from '@/utils/api'
const state = () => ({
  headline: [],
  articles: [],
  categoryArticles: {
    business: [],
    entertainment: [],
    sports: [],
    science: [],
    health: [],
    general: []
  }
})

const getters = {
  getArticles (state) {
    return state.articles
  },
  getHeadlines (state) {
    return state.headline
  },
  getCategoryArticles (state) {
    return state.categoryArticles
  }
}
const mutations = {
  addArticles (state, articles) {
    state.articles = [...articles]
  },
  addCategory (state, { articles, category }) {
    state.categoryArticles[category] = [...articles]
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
    let articles = data.articles
    let category = payload
    // commit('removeArticles')
    // commit('addArticles', data.articles)
    commit('addCategory', { articles, category })
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
