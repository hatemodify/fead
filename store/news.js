import axios from 'axios'
import { CATEGORY_API, HEADLINE_API } from '@/utils/api'
import { SEARCH_API } from '../utils/api'
const state = () => ({
  headline: [],
  articles: [],
  searchResult: [],
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
  },
  getSearchResult (state) {
    return state.searchResult
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
    state.headline = state.headline.concat(articles)
  },
  addSearchResult (state, searchResult) {
    state.searchResult = searchResult
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
    commit('addCategory', { articles, category })
  },
  async headlineNews ({ commit }, payload) {
    let { data } = await axios.get(HEADLINE_API(payload))
    commit('addHeadlines', data.articles)
  },
  async getSearchResult ({ commit }, payload) {
    let { data } = await axios.get(SEARCH_API(payload))
    let articles = data.articles
    commit('addSearchResult', { articles })
  }
}

export default {
  namespase: true,
  state,
  mutations,
  getters,
  actions
}
