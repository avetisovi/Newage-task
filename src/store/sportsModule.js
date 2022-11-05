export const sportsModule = {
  namespaced: true,
  state: () => ({
    sportsArr: []
  }),
  mutations: {
    setSports(state, arr) {
      state.sportsArr = arr;
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
  }
};
