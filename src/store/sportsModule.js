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
      // fetch from localStorage if there are sports
      if (localStorage.getItem('sports')) {
        commit('setSports', JSON.parse(localStorage.getItem('sports')));
      } else {
        //fetch from server
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

        // store fetched data
        commit('setSports', response);
        localStorage.setItem('sports', JSON.stringify(response));
      }
    }
  },
  getters: {
    // get single post of SinglePost page
    singleSport(state) {
      if (state.slug && state.sportsArr.length) {
        return state.sportsArr.find((obj) => obj.c === state.slug);
      }
      return { n: '' };
    }
  }
};
