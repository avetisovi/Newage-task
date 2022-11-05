import Vue from 'vue';
import Vuex from 'vuex';
import { authModule } from '@/store/authModule';
import { sportsModule } from '@/store/sportsModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    string: 'str'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { auth: authModule, sports: sportsModule }
});
