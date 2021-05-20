<template>
  <header class="flex border-gray-500 p-3 justify-between align-middle">
    <nuxt-link to="/"><div class="text-gray-800 text-2xl font-bold">BOOKLAMP</div></nuxt-link>
    <div class="text-gray-400"><nuxt-link to="/login">login</nuxt-link> | <nuxt-link to="/login">signup</nuxt-link> | <nuxt-link to="/bookshelf">bookshelf</nuxt-link></div>
  </header>
</template>

<script>
export default {
    name:'appHeader'
}
</script>