import router from '@/router';

export const authModule = {
  namespaced: true,
  state: () => ({
    isAuth: false,
    authToken: '', // FIXME: why empty string and not null?
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
    },
    setValid(state, bool) {
      state.valid = bool;
    }
  },
  getters: {
    getIsAuth(state) {
      return state.isAuth;
    },
    getToken(state) {
      return state.authToken || localStorage.getItem('token');
    }
  },
  actions: {
    async signIn({ state, commit }) {
      try {
        // send request to server
        const response = await fetch( // FIXME: what about moving base url in constants?
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

        const result = await response.json();

        // sign in if valid
        if (response.ok) {
          commit('setAuth', response.ok);
          commit('setToken', result.token);
          localStorage.setItem('token', result.token); // FIXME: Must be moved inside the mutation of token.
          router.push('/sports');
        } else {
          // display text if not
          commit('setValid', false);
          commit('setLogin', '');
          commit('setPassword', '');
        }
      } catch (error) {
        alert(error);
      }
    },
    signOut({ commit }) {
      commit('setAuth', false);
      commit('setToken', '');
      commit('setLogin', '');
      commit('setPassword', '');

      localStorage.setItem('token', '');
      localStorage.setItem('sports', ''); // FIXME: this must be the action in sports module.
      router.push('/');
    }
  }
};
