<template>
  <div
    class="container w-screen h-screen mx-auto my-auto items-stretch flex flex-wrap content-center items-center justify-center bg-yellow-100"
  >
    <div class="my-auto space-y-12 text-center">
      <div class="">
        <Logo />
      </div>
      <div class="">
        <input
          v-model="searchQuery"
          type="search"
          autocomplete="off"
          placeholder="Tell me your Expressions!!"
          class="w-96 px-5 border-2"
        />
      </div>
      <div
        class="h-1/2 w-screen bg-gray-100 content-center align-center text-center flex justify-center"
      >
        <vue-word-cloud
          style="height: 40vh; width: 80vw"
          :words="keywords"
          :color="([, weight]) => (weight > 10 ? 'DeepPink' : 'blue')"
          font-family="Roboto"
          spacing="1"
          animation-easing="ease-out"
          animation-duration="2500"
          enteranimation="zoom"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VueWordCloud from "vuewordcloud";

export default {
  data() {
    return {
      searchQuery: "",
      articles: [],
      keywords: [
        ["BookRecommend", 15],
        ["horror", 3],
        ["fantasy", 7],
        ["adventure", 5],
        ["thriller", 6],
        ["romance", 3],
        ["documentary", 7],
        ["action", 6],
        ["mystery", 5],
        ["blockbuster", 3],
        ["horror", 3],
        ["fantasy", 7],
        ["adventure", 5],
        ["thriller", 6],
        ["romance", 3],
        ["documentary", 7],
        ["action", 6],
        ["mystery", 5],
        ["blockbuster", 3]
      ]
    };
  },
  components: {
    [VueWordCloud.name]: VueWordCloud
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("articles")
        .limit(6)
        .search(searchQuery)
        .fetch();
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
