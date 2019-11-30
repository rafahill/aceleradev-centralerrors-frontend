import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: null,
  },
  mutations: {
    SET_PERFIL(state, seller) {
      state.profile = seller;
    },
  },
  actions: {
    carregarPerfil({ commit }, user) {
      console.log(user)
    },
  },
  modules: {
  },
  getters : {
    
  }
})
