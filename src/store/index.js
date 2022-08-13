import Vue from "vue";
import Vuex from "vuex";
import state from "@/store/modules/state";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    state,
  },
});
