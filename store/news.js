import axios from 'axios'
import { CATEGORY_API } from '@/utils/api'
const state = () => ({
  articles: [],
  category: ''
})

const getters = {
  getArticles (state) {
    return state.articles
  },
  getCategory (state) {
    return state.category
  }
}
const mutations = {
  addArticles (state, articles) {
    state.articles = [...articles]
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
    commit('removeArticles')
    commit('addArticles', data.articles)
  }
}

export default {
  namespase: true,
  state,
  mutations,
  getters,
  actions
}
