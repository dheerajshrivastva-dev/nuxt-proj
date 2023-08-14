<template>
  <div class="default-layout">
    <header class="header">
      <nav class="navigation">
        <router-link to="/app/home">Home</router-link>
        <router-link to="/app/about">About</router-link>
        <router-link to="/tsx">TSX page</router-link>
        <router-link to="/app/ApiTesting">Api Testing Site</router-link>
        <router-link to="/app/graphql-testing">GraphQL Testing</router-link>
        <router-link to="/app/userinfo">Profile</router-link>
        <!-- Add more navigation links if needed -->
      </nav>
      <div class="user-info">
        <template v-if="userData">
          Hi, {{ userData.name }}
        </template>
        <template v-else>
          <router-link to="/login">Register</router-link>
        </template>
      </div>
    </header>
    
    <main class="main-content">
      <slot /> <!-- This renders the content of your pages -->
    </main>
    
    <footer class="footer">
      <p>&copy; {{ currentYear }} NuxtPROJ. All rights reserved. Built with ❤️</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'
  import { useAuthStore } from '../store/AuthStore';
  const authData = useAuthStore();
  const { userData } = storeToRefs(authData);
  const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.default-layout {
  font-family: Arial, sans-serif;
  color: #333;
  background: linear-gradient(to bottom, #13112a, #0c270a);
}

.header {
  background-color: #3083dc;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation {
  display: flex;
}

.navigation a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
}

.user-info {
  margin-right: 20px;
}

.main-content {
  min-height: 100vh;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}
</style>

<style>
  * {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
