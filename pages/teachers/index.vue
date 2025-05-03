<template>
  <div class="teacher-list">
    <h1 class="page-title">List of Teachers</h1>

    <div class="filter-section">
      <label for="skills-select" class="form-label">Filter by Skills:</label>
      <select
        id="skills-select"
        class="form-control"
        v-model="useStore.selectedTeachers"
      >
        <option value="">All Skills</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Database">Database</option>
      </select>
    </div>

    <ul class="teacher-list-items">
      <li
        class="teacher-item"
        v-for="teacher in useStore.filteredTeachers"
        :key="teacher.id"
      >
        <NuxtLink :to="`/teachers/${teacher.id}`" class="teacher-link">
          <strong>{{ teacher.name }}</strong> - Skills:
          <strong>{{ teacher.skills.join(", ") }}</strong>
        </NuxtLink>
      </li>
    </ul>
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
/* General Layout */
.teacher-list {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Filter Section */
.filter-section {
  margin-bottom: 20px;
}

.form-label {
  font-size: 1rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 8px;
  display: block;
}

.form-control {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: #4a90e2;
  outline: none;
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
}

/* Teacher List */
.teacher-list-items {
  list-style-type: none;
  padding: 0;
}

.teacher-item {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.teacher-item:hover {
  background-color: #4a90e2;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.teacher-link {
  text-decoration: none;
  color: inherit;
}

.teacher-item strong {
  font-weight: bold;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .teacher-list {
    padding: 15px;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .form-control {
    padding: 8px;
  }

  .teacher-item {
    padding: 12px;
  }
}
</style>
