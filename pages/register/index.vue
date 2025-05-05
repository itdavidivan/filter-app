<template>
  <div class="auth-container">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <input type="text" v-model="username" placeholder="Full Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
    <p>
      Already have an account?
      <NuxtLink to="/login">Login here</NuxtLink>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleRegister() {
      try {
        const response = await axios.post(
          "http://localhost:1337/api/auth/local/register",
          {
            username: this.username,
            email: this.email,
            password: this.password,
          }
        );
        // const jwt = response.data.jwt;
        // localStorage.setItem("jwt", jwt);
        console.log(response.data);
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 60px auto;
  padding: 30px;
  background: #f5f7fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #357ab7;
}

p {
  text-align: center;
  margin-top: 15px;
}
</style>
