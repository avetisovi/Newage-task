<template>
  <div id="app">
    <SignIn />
  </div>
</template>

<script>
import SignIn from './pages/SignIn';

export default {
  components: { SignIn }
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
  background-color: #fafafa;
}

#app {
  font-family: 'Inter', sans-serif;
  color: #212121;
  min-height: 100vh;
}
</style>
