<template>
  <div class="layout-container">
    <header class="header">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/teachers" class="nav-link">Teachers</NuxtLink>
    </header>
    <main class="main-content">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;

  background-color: #f4f4f4;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin: 0 1rem;
}

.nav-link:hover {
  text-decoration: underline;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h2 {
  font-size: 2rem;
  color: #333;
}
</style>
