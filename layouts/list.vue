<template>
  <div>
    <appHeader />
    <searchBar id="headerSearch" />
    <!--<InstantSearch id="headerSearch" />-->
    <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
      <v-app-bar color="deep-purple accent-4">
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <div class="flex justify-around bg-gray-200 p-3 rounded-lg">
              <input
                type="text"
                class="w-5/6"
                v-model="query"
                v-on:keyup.enter="addTag"
              />
              <button v-on:click="addTag">
                <img
                  src="../static/searchdark.svg"
                  class="object-contain w-5 float-right"
                />
              </button>
            </div>
            <br />
            <!--<searchBar
              id="sidebarSearch"
              v-model="query"
              v-on:submit="addTag"
            />
            <InstantSearch
              style="width:95%"
              class="mx-auto px-4 shadow-none"
              v-model="query"
              v-on:submit="addTag"
            />-->

            <v-list-item
              v-for="tag in tags"
              v-bind:key="tag.id"
              class="bg-blue-100 bg-opacity-70"
            >
              <v-list-item-title class="h-5">{{ tag }}</v-list-item-title>
              <img
                src="../static/cancel.png"
                width="6%"
                height="60%"
                v-on:click="deleteTag(tag)"
              />
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-card-text>
        <Nuxt />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import bookList from "../components/booklist";
import appHeader from "../components/appheader";
import searchBar from "../components/searchbar";
import InstantSearch from "../components/vue-instant-search.vue";

export default {
  data: () => ({
    drawer: false,
    group: null,
    query: "",
    tags: ["111", "222", "333"],
    searchResult: []
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
  components: {
    bookList: bookList,
    appHeader,
    searchBar,
    InstantSearch
  },
  methods: {
    addTag: function() {
      if (!this.tags.includes(this.query) && this.query != "") {
        this.tags.push(this.query);
        console.log("add complete");
      }
    },
    deleteTag: function(tag) {
      var num = this.tags.indexOf(tag);
      this.tags.splice(num, 1);
      console.log("delete complete");
    },
    async search() {
      this.searchResult = await this.$axios.$get("http://13.209.42.183:5000", {
        user_input: this.query
      });
    }
  }
};
</script>

<style>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: white;
}
header {
  padding: 0px;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: unset;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  box-shadow: unset;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: unset;
}
.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating)
  .v-navigation-drawer__border {
  background-color: none;
}
.v-overlay__scrim {
  background-color: white;
}
.v-navigation-drawer__border {
  width: 0px;
  right: none;
}
.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),
.v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
  box-shadow: none;
}
.v-navigation-drawer--bottom.v-navigation-drawer--is-mobile {
  max-height: none;
  bottom: unset;
}
.v-navigation-drawer--bottom.v-navigation-drawer {
  max-height: none;
  bottom: unset;
}
.v-card > *:last-child:not(.v-btn):not(.v-chip) {
  border-bottom-left-radius: unset;
  border-bottom-right-radius: unset;
}
.v-navigation-drawer {
  will-change: unset;
}
/*헤더 검색창 부분 스타일*/
#headerSearch #input {
  width: 60vw;
  height: 100%;
  margin: 0px auto;
  box-shadow: unset;
}
#headerSearch form > * {
  margin: 0px 5px;
}
#headerSearch input {
  width: 100%;
}
button.ais-clear.ais-clear--disabled {
  display: none;
}
button.ais-clear {
  display: none;
}
/*여기까지*/
</style>
