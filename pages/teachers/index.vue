<template>
  <div>
    <h1>List of Teachers</h1>
    <ul>
      <li v-for="teacher in teachers" :key="teacher.name">
        <strong>{{ teacher.name }}</strong> - Skills:
        {{ teacher.skills.join(", ") }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      teachers: [
        { name: "John Doe", skills: ["Frontend", "Design"] },
        { name: "Jane Smith", skills: ["Backend", "Database"] },
        { name: "Alice Johnson", skills: ["Frontend", "Backend"] },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

strong {
  font-weight: bold;
}
</style>
