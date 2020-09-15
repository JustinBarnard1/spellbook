import Vue from 'vue'
import Vuex from 'vuex'
import { api, sandbox } from '../services/AxiosService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiSpells: [],
    mySpells: [],
    activeSpell: [],

  },
  mutations: {
    allApiSpells(state, allSpells) {
      state.apiSpells = allSpells
    },
    allMySpells(state, mySpells) {
      state.mySpells = mySpells
    },
    setActiveSpell(state, currentSpell) {
      state.activeSpell = currentSpell
    }
  },
  actions: {
    async getApiSpells({ commit, dispatch },) {
      let res = await api.get('spells/')
      console.log(res.data)
      commit("allApiSpells", res.data.results)
    },
    async getMySpells({ commit, dispatch },) {
      let res = await sandbox.get('')
      commit("allMySpells", res.data.data)
    },
    async setActiveSpell({ commit, dispatch }, spell) {
      let res = await api.get("spells/" + spell.index)
      commit("setActiveSpell", res.data)
    }
  },
  modules: {
  }
})
