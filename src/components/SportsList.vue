<template>
  <ul class="sports__list">
    <SportsItem v-for="sport in getSports" :sport="sport" :key="sport.id" />
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SportsItem from './SportsItem';
export default {
  computed: {
    ...mapGetters({
      getSports: 'sports/getSports'
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
