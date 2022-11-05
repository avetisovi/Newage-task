<template>
  <div id="app">
    <SignedInHeader v-if="isAuth" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SignedInHeader from './components/SignedInHeader.vue';

export default {
  components: { SignedInHeader },

  // isAuth initialisation
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth
    })
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
