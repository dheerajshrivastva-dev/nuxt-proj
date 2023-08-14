<template>
  <div class="landing">
    <div class="content">
      <h1>Welcome to Colorful Landing</h1>
      <p>Experience a world of vibrant colors!</p>
      <button @click="goToLogin">Get Started</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../store/AuthStore';
import { storeToRefs } from 'pinia'
const router = useRouter();
const authData = useAuthStore();
const { userData } = storeToRefs(authData);

const goToLogin = () => {
  if (userData) {
    router.push('/app/home');
  } else {
    router.push('/login');
  }
};
</script>

<style scoped>
.landing {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #13112a, #0c270a);
}

.content {
  text-align: center;
  color: white;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

button {
  background-color: #007bff;
  color: rgb(5, 2, 32);
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #0056b3;
}
</style>
