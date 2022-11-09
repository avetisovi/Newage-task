<template lang=""> <!-- FIXME: there must be no `lang` attribute for the template -->
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
      fetchSports: 'sports/fetchSports' // FIXME: unnecessary code
    })
  },
  components: { SportsList }
};
</script>
<style lang="scss">
.sports__wrapper {
  padding-top: 110px;
}

@media (max-width: 500px) {
  .sports__wrapper {
    padding-top: 80px;
  }
}
</style>
