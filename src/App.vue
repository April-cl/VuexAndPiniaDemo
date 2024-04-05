<script setup>
import { useStore } from "vuex";
import { usePiniaStoreA } from "@/piniaStore/piniaStoreA.js";

const vuexStore = useStore();
const vuexButtonClick = () => {
  vuexStore.commit("increment");
};
const piniaStoreA = usePiniaStoreA();
const piniaStoreAButtonClick = () => {
  piniaStoreA.increment();
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
  <div>
    <h1>pinia</h1>
    <p>message: {{ piniaStoreA.msg }}</p>
    <p>
      <button @click="piniaStoreAButtonClick">increment</button>
      {{ piniaStoreA.count }}
    </p>
  </div>
</template>

<style scoped>
</style>
