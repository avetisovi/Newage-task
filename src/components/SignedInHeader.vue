<template>
  <header class="header">
    <div class="container header__inner">
      <router-link to="/sports"
        ><img class="logo__img" src="@/images/logo.svg"
      /></router-link>
      <button class="header__btn" @click="signOut">Sign Out</button>
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
    justify-content: space-between;
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

.logo__img {
  width: 220px;
  height: 50px;
}
</style>
