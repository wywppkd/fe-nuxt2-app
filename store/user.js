export const state = () => ({
  userInfo: {},
})

export const getters = {
  getCounter(state) {
    return state.userInfo
  },
}

export const mutations = {
  setUserInfo(state) {
    state.userInfo = state
  },
}
