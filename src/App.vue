<template>
  <div id="app">
    <SignedInHeader v-if="isAuth" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import SignedInHeader from './components/SignedInHeader.vue';
import router from './router';

export default {
  components: { SignedInHeader },

  // isAuth initialisation
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth
    })
  },

  // mutations
  methods: {
    ...mapMutations({
      setToken: 'auth/setToken',
      setAuth: 'auth/setAuth',
      setSports: 'sports/setSports'
    })
  },

  mounted() {
    // if localStorage has data store it, else redirect to SignIn page
    // FIXME: do you know the difference between assigning and referencing?
    const token = localStorage.getItem('token');
    if (token) {
      this.setAuth(true);
      this.setToken(token);
    } else {
      if (this.$route.path !== '/') {
        router.push('/');
      }
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
