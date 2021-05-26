<template>
  <nav class="h-20 grid bg-yellow-300 justify-items-center">
    <div class="flex m-4 p-2 bg-white border-1 rounded-md border-gray-400">
      <form class="justify-center flex">
        <input id="input" type="text" class="" />
        <button type="submit">
          <img
            src="../static/searchdark.svg"
            class="object-contain w-5 float-right"
          />
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "searchBar"
};
</script>

<style></style>
