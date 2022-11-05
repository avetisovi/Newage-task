<template lang="">
  <div>
    <div>you are signed in</div>
  </div>
</template>
<script>
import router from '@/router';
import { mapState, mapActions } from 'vuex';
export default {
  // redirecting to SignIn
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth,
      sports: (state) => state.sports.sportsArr
    })
  },
  mounted() {
    if (!this.isAuth) {
      router.push('/');
    } else {
      this.fetchSports();
    }
  },
  methods: {
    ...mapActions({
      fetchSports: 'sports/fetchSports'
    })
  }
};
</script>
<style lang=""></style>
