<template>
  <nav
    class="md:h-16 sm:h-12 lg:h-20 w-full grid bg-customYel-200 justify-items-center flex items-center"
  >
    <div class="flex h-3/4 p-2 bg-white border-1 rounded-md border-gray-400">
      <div class="justify-center flex">
        <input
          id="query"
          type="text"
          class=""
          style="width:50vw"
          v-model="query"
          v-on:keyup.enter="search"
        />

        <button v-on:click="search">
          <img
            src="../static/searchdark.svg"
            class="object-contain w-5 float-right"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "searchBar",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    async search() {
      window.location.href = "/searchlist?query=" + this.query;
    }
  }
};
</script>

<style></style>
