<template>
  <div class="signIn__wrapper">
    <div class="signIn__content">
      <h1 class="signIn__title">Sign In</h1>
      <input placeholder="Login" class="signIn__input" type="text" />
      <input placeholder="Password" class="signIn__input" type="password" />
      <button class="signIn__btn">Sign In!</button>
    </div>
  </div>
</template>

<script>
export default {};
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
    display: flex;
    flex-direction: column;
    gap: 40px;

    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;

    padding: 50px 70px;
  }

  &__title {
    margin: 0 0 10px;
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
  &__btn {
    align-self: flex-end;
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
}
</style>
