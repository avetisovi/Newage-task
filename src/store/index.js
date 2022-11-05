import Vue from 'vue';
import Vuex from 'vuex';
import { authModule } from '@/store/authModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    string: 'str'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { auth: authModule }
});
