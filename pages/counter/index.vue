<template>
  <div>
    <h1>Hello World</h1>
    <h2>count: {{ useStore.counter }}</h2>
    <h2>doubleCount: {{ useStore.doubleCount }}</h2>
    <button @click="useStore.increment">+</button>
    <button @click="useStore.decrement">-</button>
    <button @click="useStore.reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/stores/counter";
export default {
  computed: {
    useStore() {
      return useStore();
    },
  },
};
</script>
<style scoped>
button {
  margin: 10px;
  padding: 10px;
  border: 2px solid #000;
  box-shadow: 1px 1px 2px #000;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:hover {
  background-color: #000;
  color: #fff;
}
</style>
