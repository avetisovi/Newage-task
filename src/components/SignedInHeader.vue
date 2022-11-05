<template>
  <header>
    <button @click="signOut">Sign Out</button>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      signOut: 'auth/signOut'
    })
  }
};
</script>

<style lang="scss"></style>
