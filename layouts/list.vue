<template>
  <div>
    <appHeader />
    <InstantSearch id="headerSearch" />
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
            <InstantSearch
              style="width:95%"
              class="mx-auto px-4 shadow-none"
              v-bind="query"
              v-on:submit="addTag"
            />

            <v-list-item v-for="tag in tags" v-bind:key="tag.id">
              {{ tag }}
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
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
    tags: ["111", "222", "333"]
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
  method: {
    addTag: function() {
      this.tag.push("this.query");
      console.log("add complete");
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
#headerSearch {
  width: 50vw;
  height: 100%;
  margin: 0px auto;
  box-shadow: unset;
}
button.ais-clear.ais-clear--disabled {
  display: none;
}
button.ais-clear {
  display: none;
}
/*여기까지*/
</style>
