export const useStore = defineStore("counter", {
  state: () => ({
    counter: 0,
    teachers: [
      { id: 1, name: "John Doe", skills: ["Frontend", "Design"] },
      { id: 2, name: "Jane Smith", skills: ["Backend", "Database"] },
      { id: 3, name: "Alice Johnson", skills: ["Frontend", "Backend"] },
    ],
    selectedTeachers: "",
    isAuthenticated: false,
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
    reset(state) {
      state.counter = 0;
    },
    filteredTeachers(state) {
      if (!state.selectedTeachers) {
        return state.teachers;
      }
      return state.teachers.filter((teacher) =>
        teacher.skills.includes(state.selectedTeachers)
      );
    },
  },
});
