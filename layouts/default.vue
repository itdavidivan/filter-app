<template>
  <div class="layout-container">
    <header class="header">
      <NuxtLink to="/" class="nav-link logo">Home</NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/counter" class="nav-link">Counter</NuxtLink>
        <NuxtLink
          v-if="useStore.isAuthenticated"
          to="/teachers"
          class="nav-link"
          >Teachers</NuxtLink
        >
        <NuxtLink v-if="!useStore.isAuthenticated" to="/login" class="nav-link"
          >Login</NuxtLink
        >
        <NuxtLink to="/register" class="nav-link">Register</NuxtLink>
        <button
          v-if="useStore.isAuthenticated"
          @click="logout"
          class="nav-link logout-button"
        >
          Logout
        </button>
      </div>
    </header>
    <main class="main-content">
      <slot></slot>
    </main>
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

  methods: {
    logout() {
      this.$router.push("/login");
      localStorage.removeItem("jwt");
      this.useStore.isAuthenticated = false;
    },
  },
};
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Skryje nežiaduce scrollbary */
}

.layout-container {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  height: 98vh;
  background-color: #f0f4f8;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  margin: 0; /* Pridaný margin: 0 */
}

.main-content {
  flex: 1;
  margin: 0;
  padding: 0; /* Zabezpečí, že nevzniknú žiadne paddingy */
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  margin: 0 1rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
  color: #1abc9c;
  transform: translateY(-2px);
}

.nav-link:active {
  color: #16a085;
}

.logout-button {
  background-color: #e74c3c;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.logout-button:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
}

h2 {
  font-size: 2.5rem;
  color: #34495e;
  margin-bottom: 1rem;
}
</style>
