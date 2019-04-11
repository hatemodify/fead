export const state = () => ({
  articles: []
})

export const mutations = {
  addArticles (state, articles) {
    state.articles = [...articles]
  }
}
export const getters = {
  getArticles (state) {
    return state.articles
  }
}
export const actions = {
  getArticles ({ commit }, { req }) {}
}
