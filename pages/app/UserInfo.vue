<template>
  <section>
    <div class="container">
      <h1>Name: {{ userData.name }}</h1>
      <p>Email: {{ userData.email }}</p>
      <p>Number: {{ userData.mobile }}</p>
    </div>
  </section>
</template>

<script setup>
  import { useAuthStore } from '../../store/AuthStore';
  import { storeToRefs } from 'pinia'
  const authData = useAuthStore();
  const { userData } = storeToRefs(authData)
</script>

<style scoped>
.container {
  max-width: fit-content;
  max-height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  flex-direction: column;
  border: 2px solid aqua;
  border-radius: 5px;
}
section {
  margin: auto;
  min-height: 100vh;
  max-width: 300px;
  margin-top: 10%;
}
h1, p {
  color: aqua;
}

</style>