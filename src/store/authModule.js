import router from '@/router';

export const authModule = {
  namespaced: true,
  state: () => ({
    isAuth: false,
    authToken: null,
    login: '',
    password: '',
    valid: true
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
      localStorage.setItem('token', str);
    },
    setValid(state, bool) {
      state.valid = bool;
    }
  },
  getters: {
    getIsAuth(state) {
      return state.isAuth || !!localStorage.getItem('token');
    },
    getToken(state) {
      return state.authToken || localStorage.getItem('token');
    }
  },
  actions: {
    async signIn({ rootState, state, commit }) {
      try {
        // fetch request options
        const url = `${rootState.baseUrl}/auth/signin`;

        const fetchOptions = {
          method: 'POST',
          redirect: 'follow',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            login: state.login,
            password: state.password
          })
        };

        // send fetch request
        const response = await fetch(url, fetchOptions);

        const result = await response.json();

        // sign in if valid
        if (response.ok) {
          commit('setAuth', response.ok);
          commit('setToken', result.token);
          router.push('/sports');
        } else {
          // display text if not
          commit('setValid', false);
          commit('setLogin', '');
          commit('setPassword', '');
        }
      } catch (error) {
        console.log(error);
      }
    },

    signOut({ commit }) {
      commit('setAuth', false);
      commit('setLogin', '');
      commit('setPassword', '');
      commit('setToken', '');

      this.commit('sports/setSports', []);

      router.push('/');
    }
  }
};
