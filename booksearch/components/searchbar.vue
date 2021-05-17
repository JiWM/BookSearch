<template>
  <nav class="h-20 grid bg-yellow-300 justify-items-center">
      <InstantSearch class="w-1/2 shadow-none" />
  </nav>
</template>

<script>
import InstantSearch from "../components/vue-instant-search.vue";

export default {
    name:'searchBar',
    components:{
      InstantSearch,
    }
}
</script>

<style>
</style>