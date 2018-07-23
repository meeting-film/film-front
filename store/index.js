import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
