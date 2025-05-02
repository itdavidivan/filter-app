export const useStore = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
});
