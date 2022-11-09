<template>
  <div class="signIn__wrapper">
    <div class="signIn__content">
      <h1 class="signIn__title">Sign In</h1>
      <form class="signIn__form" @submit.prevent="signIn">
        <input
          required
          v-bind:value="login"
          @input="setLogin($event.target.value)"
          placeholder="Login"
          class="signIn__input"
          type="text"
        />
        <input
          required
          v-bind:value="password"
          @input="setPassword($event.target.value)"
          :model-value="password"
          @update:model-value="setPassword"
          placeholder="Password"
          class="signIn__input"
          type="password"
        />
        <div class="signIn__form-footer">
          <p v-if="!valid" class="signIn__err">Please enter valid data!</p>
          <button class="signIn__btn">Sign In!</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapMutations({
      setLogin: 'auth/setLogin',
      setPassword: 'auth/setPassword'
    }),
    ...mapActions({
      signIn: 'auth/signIn'
    })
  },
  computed: {
    ...mapState({
      login: (state) => state.auth.login,
      password: (state) => state.auth.password,
      isAuth: (state) => state.auth.isAuth,
      valid: (state) => state.auth.valid
    }),
    ...mapGetters({
      getToken: 'auth/getToken'
    })
  },
  mounted() {
    if (this.getToken) { // FIXME: the check must be done using the getter from store.
      router.push('/sports');
    }
  }
};
</script>

<style lang="scss" scoped>
.signIn {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
  }

  &__content {
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;

    padding: 50px 70px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__title {
    margin: 0 0 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid #525252;
  }

  &__input {
    width: 300px;
    padding: 15px;

    border: 1px solid #dd25fe;
    border-radius: 5px;

    font-size: 1.1rem;
  }
  &__form-footer {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__btn {
    margin-left: auto;
    padding: 15px 20px;

    font-size: 1.1rem;
    color: #dd25fe;
    background-color: transparent;

    border: 1px solid #dd25fe;
    border-radius: 5px;

    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: white;
      background: linear-gradient(90deg, #dd25fe, #0075ff 103.07%);
    }
  }
  &__err {
    margin: 0;
    font-size: 1.1rem;
    color: #f00;
    font-weight: 600;
  }
}

@media (max-width: 768px) {
  .signIn {
    &__content {
      width: 100vh;
      height: 100vh;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__form {
      flex: 1 1 0;
    }
    &__form-footer {
      margin-top: auto;
    }
  }
}

@media (max-width: 500px) {
  .signIn {
    &__input {
      width: 100%;
    }
    &__content {
      padding: 50px 30px;
    }
    &__btn {
      min-width: 105px;
    }
  }
}
</style>
