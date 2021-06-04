<template>
  <div
    class="h-screen w-screen bg-cover bg-center flex justify-center items-center"
    style="background-image: url(main.png)"
  >
    <div class="w-2/3 items-center justify-items-stretch text-center">
      <img src="../static/logowhite.svg" class="mx-auto" />
      <div class="text-3xl text-white font-bold">
        LIGHT UP YOUR READING
      </div>
      <div class="flex justify-around bg-white rounded-lg">
        <input
          type="text"
          v-model="query"
          v-on:keyup.enter="search"
          style="width:95%"
          class="h-10"
        />
        <button v-on:click="search">
          <img
            src="../static/searchdark.svg"
            class="object-contain w-5 float-right"
          />
        </button>
      </div>
      <div class="flex justify-around  text-white">
        <div
          v-for="keyword in keywords.slice(num, num + 5)"
          v-bind:key="keyword.id"
        >
          <nuxt-link :to="{ name: 'searchlist', params: { keyword: keyword } }">
            {{ keyword }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
//import VueSearchPanel from "../components/vue-search-panel.vue";
import InstantSearch from "../components/vue-instant-search.vue";
//import InnerSearch from "../components/vue-innersearch.vue";

var num = Math.random() * 14;

//var num = new Array();

/*while (true) {
  if (num.length == 7) {
    break;
  }
  const data = Math.floor(Math.random() * 19);
  if (data in num) {
    continue;
  }
  num.push(data);
}*/

export default {
  layout: "main",
  components: {
    Logo: Logo,
    InstantSearch
    //InnerSearch
    //VueSearchPanel: VueSearchPanel
  },
  data() {
    return {
      keywords: [
        "BookRecommend",
        "horror",
        "fantasy",
        "adventure",
        "thriller",
        "romance",
        "documentary",
        "action",
        "mystery",
        "blockbuster",
        "horror",
        "fantasy",
        "adventure",
        "thriller",
        "romance",
        "documentary",
        "action",
        "mystery",
        "blockbuster"
      ],
      num: num
    };
  },
  methods: {
    async search() {
      this.searchResult = await this.$axios.$get("http://13.209.42.183:5000", {
        user_input: this.query
      });
    },
    async searchKeyword(keyword) {
      this.searchResult = await this.$axios.$get("http://13.209.42.183:5000", {
        user_input: keyword
      });
    }
  }
};
</script>
