import Vue from 'vue';
import Vuex from 'vuex';
import { authModule } from '@/store/authModule';
import { sportsModule } from '@/store/sportsModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: 'https://paridirect-ussd.dev.smrtsrc.io/api'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { auth: authModule, sports: sportsModule }
});
