<template>
  <ul class="sports__list">
    <SportsItem v-for="sport in sports" :sport="sport" :key="sport.id" />
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SportsItem from './SportsItem';
export default {
  computed: {
    ...mapState({
      sports: (state) => state.sports.sportsArr,
      token: (state) => state.auth.authToken
    })
  },

  mounted() {
    this.fetchSports();
  },

  methods: {
    ...mapActions({
      fetchSports: 'sports/fetchSports'
    })
  },
  components: { SportsItem }
};
</script>

<style lang="scss">
.sports__list {
  list-style: none;
  padding: 30px 0;
  margin: 0;
}
</style>
