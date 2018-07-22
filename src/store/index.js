/**
 * DMS base app Store
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import demo from "./demo"

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    demo
  }
})

export default store
