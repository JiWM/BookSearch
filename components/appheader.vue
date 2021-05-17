<template>
  <header class="flex border-gray-500 p-3">
    <div class="flex-1"><nuxt-link to="/"><h1>NAME</h1></nuxt-link></div>
    <div>login | signup | bookshelf</div>
  </header>
</template>

<script>
export default {
    name:'appHeader'
}
</script>

<style>
header {
    height: 50px;
    padding: 10px;
    margin-bottom: 10px;
}
</style>