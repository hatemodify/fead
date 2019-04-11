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
  currentCategory (state, payload) {
    state.category = payload
  }
}

const actions = {
  getArticles ({ commit }, { req }) {}
}

export default {
  namespase: true,
  state,
  mutations,
  getters,
  actions
}
