<template>
  <div class="pokemon-hero-container">
    <p v-if="!pokemons">Loading...</p>
    <h1 v-if="pokemons">Pokémon List</h1>
    <ul>
      <li v-for="(item, index) in pokemons" :key="item.name">
        <h1><NuxtLink :to="`/app/ApiTesting/${index+1}`" class="link-text">{{ item.name }}</NuxtLink></h1>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const pokemons = ref<any>(null);
onMounted(() => {
  (async () => {
    const data: any = await $fetch("https://pokeapi.co/api/v2/pokemon")
    console.log(data)
    pokemons.value = data.results
  })()
})
console.log(pokemons)

</script>
<style scoped>
  .pokemon-hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .link-text {
    color: cyan;
  }

  ul {
    list-style: none;
  }
</style>