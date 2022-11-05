<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <button class="header__btn" @click="signOut">Sign Out</button>
      </div>
    </div>
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

<style lang="scss">
.header {
  padding: 30px 0;

  &__inner {
    display: flex;
    justify-content: flex-end;
  }
  &__btn {
    color: #212121;
    font-weight: 600;
    font-size: 1.1rem;

    border: 0;
    background-color: transparent;
    padding: 5px;

    cursor: pointer;
  }
}
</style>
