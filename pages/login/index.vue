<template>
  <div class="landing">
    <div class="login-container">
      <h1>Register Yourself</h1>
      <div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="name" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="mobile">Mobile Number</label>
          <input type="tel" id="mobile" v-model="mobile" required />
        </div>
        <button @click="login" >Register</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../store/AuthStore';
import { ref, computed } from 'vue';
const { userData, setUserData} = useAuthStore();
const email = ref<string>('abcd@gai.com')
const mobile = ref<string>('9199837238')
const name = ref<string>('Ramlal')
const router = useRouter();
console.log(userData)
const login = () => {
  console.log('data', email.value);
  if (!userData) {
    setUserData({
      name: name.value,
      email: email.value,
      mobile: mobile.value
    })
    router.push('/app')
    console.log(userData)
  }
} 
</script>

<style scoped>
.landing {
  background: linear-gradient(to bottom, #13112a, #0c270a);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.login-container {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-container h1 {
  color: rgb(10, 164, 182);
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  display: block;
  margin-bottom: 5px;
  color: rgb(10, 164, 182);
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex-grow: 1;
  color:#01172f;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #0056b3;
}
</style>
