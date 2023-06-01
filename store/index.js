// 注意: 与 SPA 项目的 vuex 不同, 这里必须导出 state, getters, mutations...的函数
export const state = () => ({
  count: 0,
})

export const getters = {
  getCount(state) {
    return state.count
  },
}

export const mutations = {
  increment(state) {
    state.count++
  },
}
