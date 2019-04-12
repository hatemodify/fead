import axios from 'axios'
import { CATEGORY_API } from '@/utils/api'
const state = () => ({
  articles: [],
  category: ''
})

const getters = {
  getArticles (state) {
    return state.articles
  }
}
const mutations = {
  addArticles (state, articles) {
    state.articles = [...articles]
  }
}

const actions = {
  async getArticles ({ commit }, payload) {
    let { data } = await axios.get(CATEGORY_API(payload))
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
