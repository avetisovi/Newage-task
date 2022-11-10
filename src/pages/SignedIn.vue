<template>
  <div>
    <SignedInHeader />
    <router-view></router-view>
  </div>
</template>
<script>
import SignedInHeader from '@/components/SignedInHeader';

export default {
  components: { SignedInHeader }
};
</script>

<style lang="scss"></style>
