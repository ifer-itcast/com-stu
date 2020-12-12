import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'ifer'
  },
  mutations: {
    changeUserName(state, uname) {
      state.username = uname;
    }
  },
  actions: {
  },
  modules: {
  }
})
