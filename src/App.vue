<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import router from './router';

export default {
  // isAuth initialisation
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth
    })
  },

  // redirecting to SignIn and SignedIn
  mounted() {
    if (!this.isAuth) {
      router.push('/');
    }
  },
  watch: {
    isAuth(newVal) {
      if (newVal) {
        router.push('/sports');
      } else {
        router.push('/');
      }
    },
    $route(to) {
      if (to.path === '/' && this.isAuth) {
        router.push('/sports');
      }
    }
  }
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
  background-color: #fafafa;
}

#app {
  font-family: 'Inter', sans-serif;
  color: #212121;
  min-height: 100vh;
}
</style>
