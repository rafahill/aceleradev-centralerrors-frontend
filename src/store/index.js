import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: null,
  },
  mutations: {
    SET_PERFIL(state, user) {
      state.profile = user;
    },
  },
  actions: {
    carregarPerfil({ commit }, user) {
      commit('SET_PERFIL', user);
    },
  },
  modules: {
  },
  getters : {
    
  }
})
