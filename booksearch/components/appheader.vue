<template>
  <header class="flex border-gray-500 p-3 h-12">
    <div class="flex-1"><nuxt-link to="/"><h1 class="text-gray-800 text-2xl font-bold">BOOKLAMP</h1></nuxt-link></div>
    <div class="text-gray-400 align-middle"><nuxt-link to="/login">login</nuxt-link> | <nuxt-link to="/login">signup</nuxt-link> | <nuxt-link to="/bookshelf">bookshelf</nuxt-link></div>
  </header>
</template>

<script>
export default {
    name:'appHeader'
}
</script>

<style>
header {
    padding: 10px;
    margin-bottom: 10px;
}
</style>