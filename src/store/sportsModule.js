export const sportsModule = {
  namespaced: true,
  state: () => ({
    sportsArr: [],
    slug: ''
  }),
  mutations: {
    setSports(state, arr) {
      state.sportsArr = arr;
    },
    setSlug(state, str) {
      state.slug = str;
    }
  },
  actions: {
    async fetchSports({ rootState, commit }) {
      const token = rootState.auth.authToken;
      const request = await fetch(
        'https://paridirect-ussd.dev.smrtsrc.io/api/sports-book/sports?culture=en',
        {
          headers: {
            Accept: '*/*',
            Authorization: token
          }
        }
      );

      const response = await request.json();
      commit('setSports', response);
    }
  },
  getters: {
    singleSport(state) {
      if (state.slug && state.sportsArr.length) {
        return state.sportsArr.find((obj) => obj.c === state.slug);
      }
      return { n: '' };
    }
  }
};
