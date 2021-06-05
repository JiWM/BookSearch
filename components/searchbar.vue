<template>

  <nav class="md:h-16 sm:h-12 lg:h-20 w-full grid bg-customYel-200 justify-items-center flex items-center">
    <div class="flex w-1/2 h-3/4 p-2 bg-white border-1 rounded-md border-gray-400">
      <form class="justify-center flex w-full">
        <input id="input" type="text" class="w-full" />
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
