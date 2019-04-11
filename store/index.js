export const state = () => ({
  preloader: false
})

export const mutations = {
  setPreloader (state, payload) {
    state.preloader = payload
  }
}

export const getters = {
  getPreloader (state) {
    return state.preloader
  }
}
