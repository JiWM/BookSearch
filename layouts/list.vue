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
                class="w-11/12 text-2xl"
                v-model="bonus_query"
                v-on:keyup.enter="
                  addTag();
                  additionalSearch();
                "
              />
              <button
                v-on:click="
                  addTag();
                  additionalSearch();
                "
              >
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
              class="bg-blue-100 bg-opacity-70 h-8"
            >
              <v-list-item-title class="">{{ tag }}</v-list-item-title>
              <img
                src="../static/cancel.png"
                class="h-3 lg:h-4"
                v-on:click="
                  deleteTag(tag);
                  additionalSearch();
                "
              />
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-card-text id="cardText" style="height:79.5vh" class="overflow-auto">
        <div class="px-4">
          <div
            class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6 "
          >
            <div
              class="mx-auto w-40 text-center flex flex-wrap justify-center"
              v-for="book in searchResult"
              v-bind:key="book.id"
              style=""
            >
              <!--'/book/'+book._id-->
              <nuxt-link
                :to="{
                  path:
                    '/book/' +
                    book._id +
                    '?title=' +
                    book._source.title +
                    '&author=' +
                    book._source.author +
                    '&genre=' +
                    book._source.genre +
                    '&score=' +
                    book._score +
                    '&search=' +
                    searchResult
                }"
                class="flex flex-wrap content-between"
              >
                <img
                  :src="require('../static/book_cover/' + book._id + '.jpg')"
                  class="my-auto mx-auto"
                  height="20px"
                />
                <div
                  class="mx-auto"
                  style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
                >
                  {{ book._source.title }}
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import bookList from "../components/booklist";
import appHeader from "../components/appheader";
import searchBar from "../components/searchbar";
import InstantSearch from "../components/vue-instant-search.vue";

var localhost = "http://192.168.0.116:5000";

export default {
  mounted() {
    /*if (this.$route.params) {
      console.log(this.$route.params);
      this.searchResult = this.$axios
        .$get(localhost + "/search?user_input=" + this.$route.params.keyword)
        .then(function(res) {
          return res;
        });
      this.tags.push(this.$route.params.keyword);
    } else {*/
    console.log(this.$route.params);
    let temp1 = window.location.search;
    let temp2 = temp1.split("=");
    console.log("hahaha");
    this.query = temp2[1];
    this.searchResult = this.$axios
      .$get(localhost + "/search?user_input=" + this.query)
      .then(function(res) {
        return res;
      });

    const translatePromise = async () => {
      let temp = await this.searchResult;
      this.searchResult = temp.hits.hits;
      console.log(this.searchResult);
    };

    translatePromise();
  },
  data: () => ({
    drawer: false,
    group: null,
    query: "",
    bonus_query: "",
    keywords: "",
    tags: [],
    searchResult: [
      {
        _id: "0",
        _source: {
          title: ""
        }
      }
    ]
  }),
  watch: {
    group() {
      this.drawer = false;
    },
    newSearch() {
      window.location.search;
    }
  },
  components: {
    bookList: bookList,
    appHeader,
    searchBar,
    InstantSearch
  },
  methods: {
    initializeResult: function() {
      this.searchResult = [
        {
          _id: "0",
          _source: {
            title: ""
          }
        }
      ];
    },
    addTag: function() {
      if (!this.tags.includes(this.bonus_query) && this.bonus_query != "") {
        this.tags.push(this.bonus_query);
        console.log("add complete");
      }
    },
    deleteTag: function(tag) {
      var num = this.tags.indexOf(tag);
      this.tags.splice(num, 1);
      console.log("delete complete");
    },
    async search() {
      this.searchResult = await this.$axios.$get(
        localhost + "/search?user_input=" + this.query
      );
    },
    async additionalSearch() {
      let temp = "";
      for (let i = 0; i < this.tags.length; i++) {
        temp = temp + " " + this.tags[i];
      }

      console.log(temp);

      //initializeResult();

      this.searchResult = [
        {
          _id: "0",
          _source: {
            title: ""
          }
        }
      ];

      console.log(this.searchResult);

      this.searchResult = this.$axios
        .$get(
          localhost + "/search?user_input=" + this.query + "&keyword=" + temp
        )
        .then(function(res) {
          return res;
        });

      const translatePromise = async () => {
        let temp = await this.searchResult;
        this.searchResult = temp.hits.hits;
        console.log(this.searchResult);
      };

      translatePromise();

      console.log(this.searchResult);
    }

    /*getSrc(bookId) {
      result = "../static/book_cover/" + bookId + ".jpg";

      document.getElementById(bookId).src = result;
    }*/
  }
};
</script>

<style>
.v-list-item--dense .v-list-item__title,
.v-list-item--dense .v-list-item__subtitle,
.v-list--dense .v-list-item .v-list-item__title,
.v-list--dense .v-list-item .v-list-item__subtitle {
  line-height: inherit;
  font-size: 1.4em;
}
.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
  line-height: inherit;
}
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
