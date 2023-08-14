<template>
  <div class="container">
    <p v-if="!pokemons">loading...</p>
    <h1>GraphQl Testing site</h1>
    <h1 v-if="pokemons">Pokémon List</h1>
    <ul>
      <li v-for="(item, index) in pokemons" :key="item.name">
        <h1><NuxtLink :to="`/app/ApiTesting/${index+1}`" class="link-text">{{ item.name }}</NuxtLink></h1>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const pokemons = ref<any>(null)
  const query = gql`
    query GetPokemon($limit: Int!) {
      pokemon_v2_pokemon(limit: $limit) {
        base_experience
        id
        name
        height
      }
    }
  `
  const variables = { limit: 20 }

  const { data } = await useAsyncQuery<any>(query, variables)

  if (data) {
    pokemons.value = data.value.pokemon_v2_pokemon
  }
</script>