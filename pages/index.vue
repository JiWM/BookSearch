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
      <InstantSearch />
      <div class="flex justify-around  text-white">
        <div>{{ keywords[num[0]] }}</div>
        <div>{{ keywords[num[1]] }}</div>
        <div>{{ keywords[num[2]] }}</div>
        <div>{{ keywords[num[3]] }}</div>
        <div>{{ keywords[num[4]] }}</div>
        <div>{{ keywords[num[5]] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
//import VueSearchPanel from "../components/vue-search-panel.vue";
import InstantSearch from "../components/vue-instant-search.vue";
//import InnerSearch from "../components/vue-innersearch.vue";

var num = new Array();

while (true) {
  if (num.length == 7) {
    break;
  }
  const data = Math.floor(Math.random() * 19);
  if (data in num) {
    continue;
  }
  num.push(data);
}

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
  }
};
</script>
