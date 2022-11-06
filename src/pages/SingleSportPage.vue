<template>
  <section class="signedIn">
    <div>{{ singleSport.n }}</div>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth,
      sports: (state) => state.sports.sportsArr
    }),
    ...mapGetters({
      singleSport: 'sports/singleSport'
    })
  },
  methods: {
    ...mapMutations({
      setSlug: 'sports/setSlug'
    })
  },
  mounted() {
    this.setSlug(this.$route.params.slug);
  }
};
</script>

<style lang="scss"></style>
