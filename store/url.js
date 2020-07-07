const state = () => ({
  url: ''
})

const getters = {
  getUrl: state => state.url
}

const mutations = {
  setUrl: (state, url) => {
    state.url = url
  }
}

export default {
  state,
  getters,
  mutations,
  namespaced: true // 命令控件
}
