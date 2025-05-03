<template>
  <div class="teacher-details">
    <h1 class="page-title">Teacher Details</h1>

    <div class="teacher-info">
      <h2 class="teacher-name">
        Teacher Name: {{ useStore.teachers[$route.params.id - 1].name }}
      </h2>
      <h3 class="teacher-skills">
        Teacher Skills:
        {{ useStore.teachers[$route.params.id - 1].skills.join(", ") }}
      </h3>
    </div>
  </div>
</template>

<script>
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
.teacher-details {
  background-color: #f4f7fc;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  color: #4a90e2;
  margin-bottom: 20px;
}

.teacher-info {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.teacher-name {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.teacher-skills {
  font-size: 1.2rem;
  color: #555;
}

.teacher-skills::before {
  content: "→ ";
  color: #4a90e2;
}
</style>
