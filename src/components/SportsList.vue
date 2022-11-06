<template>
  <ul>
    <li
      v-for="sport in sports"
      :sport="sport"
      :key="sport.id"
      @click="openPost(sport.c)"
    >
      {{ sport.id }}. {{ sport.n }}
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import router from '@/router';
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
    }),
    openPost(slug) {
      router.push(`/sports/${slug}`);
    }
  }
};
</script>

<style lang="scss"></style>
