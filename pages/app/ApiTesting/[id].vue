<template>
  <div class="pokemon-details">
    <!-- Display details for the selected Pokémon -->
    <h1>Pokémon Details</h1>
    <PokeCard :name="pokemon?.name" :weight="pokemon?.weight" id="pokemon?.id" :sprites="pokemon?.sprites"/>
    <!-- Add more details as needed -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const route = useRoute()

const pokemon = ref<any>(null);
onMounted(() => {
  (async () => {
    const data: any = await $fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}/`)
    pokemon.value = data
    console.log('data', data.sprites)
  })()
})
console.log(pokemon?.value?.name)
</script>

<style scoped>
  /* Add styles as needed */
</style>