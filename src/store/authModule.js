import router from '@/router';

export const authModule = {
  namespaced: true,
  state: () => ({
    isAuth: false,
    authToken: '',
    login: '',
    password: ''
  }),
  mutations: {
    setLogin(state, str) {
      state.login = str;
    },
    setPassword(state, str) {
      state.password = str;
    },
    setAuth(state, bool) {
      state.isAuth = bool;
    },
    setToken(state, str) {
      state.authToken = str;
    }
  },
  getters: {},
  actions: {
    async signIn({ state, commit }) {
      try {
        const response = await fetch(
          'https://paridirect-ussd.dev.smrtsrc.io/api/auth/signin',
          {
            method: 'POST',
            redirect: 'follow',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              login: state.login,
              password: state.password
            })
          }
        );

        if (response.ok) {
          const result = await response.json();
          commit('setAuth', response.ok);
          commit('setToken', result.token);
          router.push('/sports');
        }
      } catch (error) {
        alert(error);
      }
    },
    signOut({ commit }) {
      commit('setAuth', false);
      commit('setToken', '');
      router.push('/');
    }
  }
};
