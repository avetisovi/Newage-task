<template lang="">
  <section class="sports__wrapper signedIn">
    <div class="container">
      <div class="sports__inner">
        <SportsList v-if="isAuth" />
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import SportsList from '@/components/SportsList';
export default {
  // redirecting to SignIn
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth,
      sports: (state) => state.sports.sportsArr
    })
  },
  methods: {
    ...mapActions({
      fetchSports: 'sports/fetchSports'
    })
  },
  components: { SportsList }
};
</script>
<style lang="scss">
.sports__wrapper {
  padding-top: 110px;
}
</style>
