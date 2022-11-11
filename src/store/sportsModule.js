export const sportsModule = {
  namespaced: true,
  state: () => ({
    sportsArr: [],
    slug: ''
  }),
  mutations: {
    setSports(state, arr) {
      state.sportsArr = arr;
      arr.length
        ? localStorage.setItem('sports', JSON.stringify(arr))
        : localStorage.setItem('sports', '');
    },
    setSlug(state, str) {
      state.slug = str;
    }
  },
  actions: {
    async fetchSports({ getters, commit, rootState }) {
      try {
        if (!getters.getSports.legnth) {
          //fetch request options
          const token = this.getters['auth/getToken'];
          const url = `${rootState.baseUrl}/sports-book/sports?culture=en`;

          const fetchOptions = {
            headers: {
              Accept: '*/*',
              Authorization: token
            }
          };

          // send fetch request
          const request = await fetch(url, fetchOptions);

          const response = await request.json();

          // store fetched data
          commit('setSports', response);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    // get single post of SinglePost page
    singleSport(state, getters) {
      if (state.slug && getters.getSports.length) {
        return getters.getSports.find((obj) => obj.c === state.slug);
      }
      return { n: '' };
    },
    getSports(state) {
      const localStorageSports = localStorage.getItem('sports');

      // return sports from state or localStorage or empty array
      if (state.sportsArr.length) {
        return state.sportsArr;
      } else if (localStorageSports) {
        return JSON.parse(localStorageSports);
      } else {
        return [];
      }
    }
  }
};
