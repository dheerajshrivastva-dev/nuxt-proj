<template>
  <div class="card">
    <h1>Name: {{ props.name }}</h1>
    <p>Weight: {{ props.weight }} Kg</p>
    <img v-if="props?.sprites?.back_default" :src="'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" class="image"/>
  </div>
</template>
<script setup lang="ts">

interface PokecardProps {
  name?: string;
  id?: number;
  weight?: number;
  sprites?: any;
}

const props = defineProps<PokecardProps>()

console.log(props.sprites)
</script>
<style scoped>
  
  .card {
  border: 0.2px solid #1428ba;
  background: rgba(94, 52, 120, 0.349);
  max-width: 700px; /* Set the maximum width to 700px */
  width: 80%; /* Set width to 80% */
  margin: 0 auto; /* Center the card horizontally */
  padding: 20px; /* Add some padding for spacing */
  border-radius: 4px;
}

.image {
  aspect-ratio: 16/9;
  max-width: 500px; /* Set the maximum width to 700px */
  width: 60%; /* Set width to 80% */
}
</style>