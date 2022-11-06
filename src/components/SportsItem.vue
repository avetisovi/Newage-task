<template>
  <li class="list__item">
    <p class="list__item-title">{{ sport.n }}</p>
    <button @click="openSport(sport.c)" class="list__item-btn">Open!</button>
  </li>
</template>

<script>
import router from '@/router';
export default {
  props: {
    sport: {
      type: Object,
      required: true
    }
  },
  methods: {
    openSport(slug) {
      router.push(`/sports/${slug}`);
    }
  }
};
</script>

<style lang="scss">
.list__item {
  margin: 0;
  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #ecf0f1;
  &-title {
    margin: 0;
  }
  &:nth-child(even) {
    background-color: #fff;
  }
  &-btn {
    padding: 5px 10px;

    border-radius: 5px;
    border: 0;

    background-color: #f1c40f;
    color: #fff;

    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      background-color: #e67e22;
    }
  }
}
</style>
