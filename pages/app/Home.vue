<template>
  <div class="home">
    <div class="hero">
      <h1>Welcome to Nuxt Interactive Home Page</h1>
      <p>Explore the amazing features of our website!</p>
      <button @click="toggleFeature">Toggle Feature</button>
    </div>
    <div class="feature" :class="{ active: isFeatureActive }">
      <h2>Interactive Feature</h2>
      <p v-if="isFeatureActive">This feature is active!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFeatureActive: false
    };
  },
  methods: {
    toggleFeature() {
      this.isFeatureActive = !this.isFeatureActive;
    }
  }
};
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  padding: 40px;
  min-height: 100vh;
}

.hero {
  background-color: #007bff;
  color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
}

button {
  background-color: #0056b3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #003c80;
}

.feature {
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease-in-out;
}

.feature.active {
  background-color: #9bd18d;
}
</style>
