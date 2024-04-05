<script setup>
import { useStore } from "vuex";

const vuexStore = useStore();
const vuexButtonClick = () => {
  vuexStore.commit("increment");
};
</script>

<template>
  <div>
    <h1>vuex</h1>
    <p>message: {{ vuexStore.state.msg }}</p>
    <p>
      <button @click="vuexButtonClick">increment</button>
      {{ vuexStore.state.count }}
    </p>
  </div>
</template>

<style scoped>
</style>
