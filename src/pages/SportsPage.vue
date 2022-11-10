<template>
  <section class="sports__wrapper signedIn">
    <div class="container">
      <div class="sports__inner">
        <SportsList v-if="getIsAuth" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import SportsList from '@/components/SportsList';

export default {
  computed: {
    ...mapGetters({
      getIsAuth: 'auth/getIsAuth'
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
