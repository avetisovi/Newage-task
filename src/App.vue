<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  // mutations
  methods: {
    ...mapMutations({
      setToken: 'auth/setToken',
      setAuth: 'auth/setAuth'
    })
  },

  mounted() {
    // if localStorage has data store it, else redirect to SignIn page
    const localStorageToken = localStorage.getItem('token');
    if (localStorageToken) {
      this.setAuth(true);
      this.setToken(localStorageToken);
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-color: #fafafa;
}

#app {
  font-family: 'Inter', sans-serif;
  color: #212121;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
