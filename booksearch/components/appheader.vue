<template>
  <header class="flex flex-row border-b-4 border-gray-500 shadow-md">
      <img src="../static/logo.svg" class="object-contain w-16">
      <div class="flex flex-row m-1 p-2 w-2/5 border-2 rounded-md border-gray-400">
        <input type="text" class="w-full">
        <img src="../static/search.png" class="object-contain w-5 float-right">
      </div>
    </header>
</template>

<script>
export default {
    name:'appHeader'
}
</script>

<style>
header {
    height: 80px;
    padding: 10px;
    margin-bottom: 10px;
}
</style>