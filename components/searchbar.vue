<template>
  <nav class="h-20 grid bg-yellow-300 justify-items-center">
    <div class="flex m-4 p-2 bg-white border-1 rounded-md border-gray-400">
      <div class="justify-center flex">
        <input
          id="query"
          type="text"
          class=""
          style="width:50vw"
          v-model="query"
          v-on:keyup.enter="search"
        />

        <img
          src="../static/searchdark.svg"
          class="object-contain w-5 float-right"
          v-on:click="search"
        />
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
      this.searchResult = await this.$axios.$get(
        "http://172.16.101.206:5000/search?user_input=" + this.query
      );
      console.log(this.searchResult);
      window.location.href = "/searchlist?query=" + this.query;
    }
  }
};
</script>

<style></style>
