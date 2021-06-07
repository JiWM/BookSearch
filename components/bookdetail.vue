<template>
  <div class="max-w-screen-3xl mx-auto">
    <div class="m-5 md:m-12 lg:m-16">
      <button v-on:click="goback">
        <p class="mb-8 text-gray-500 text-lg">
          <span class="pr-1"
            ><font-awesome-icon :icon="['fas', 'angle-double-left']"/></span
          >검색 목록으로
        </p>
      </button>
      <!--container-->

      <div class="flex flex-col md:flex-row">
        <!--image-->
        <div class="md:flex-shrink-0 mx-auto xl:ml-16">
          <img
            :src="require('../static/book_cover/' + book_id + '.jpg')"
            class="my-auto mx-auto"
          />
        </div>
        <!--description-->
        <div
          class="relative flex flex-wrap mx-auto w-full md:ml-6 xl:ml-10 mr-20 xl:mr-16 lg:ml-16 p-5"
        >
          <div id="contents" class="md:h-full">
            <table class="table-fixed w-full">
              <tr>
                <td class="align-top text-xs md:text-sm lg:text-lg xl:text-xl w-1/4 break-all">TITLE</td>
                <td class="text-left text-2xs md:text-sm lg:text-lg">{{ book_title }}</td>
              </tr>
              <tr>
                <td class="align-top text-xs md:text-sm lg:text-lg xl:text-xl w-1/4 break-all">AUTHOR</td>
                <td class="text-left text-2xs md:text-sm lg:text-lg">{{ book_author }}</td>
              </tr>
              <tr>
                <td class="align-top text-xs md:text-sm lg:text-lg xl:text-xl w-1/4 break-all">GENRE</td>
                <td class="text-left text-2xs md:text-sm lg:text-lg">{{ book_genre }}</td>
              </tr>
              <tr>
                <td class="align-top text-xs md:text-sm lg:text-lg xl:text-xl w-1/4 break-all">SCORE</td>
                <td class="text-left text-2xs md:text-sm lg:text-lg">{{ book_rate }}</td>
              </tr>
            </table>

            <!--button-->
            <div class="absolute inset-x-0 bottom-0 grid grid-cols-2 w-full text-sm lg:text-xl text-white font-semibold">
              <button
                class="bg-gray-500 mr-5 lg:ml-5 lg:mr-10 p-5 max-w-md"
                @click="toBuy = true"
              >
                구매하기
              </button>
              <button
                class="bg-gray-500 ml-5 lg:ml-10 lg:mr-5 p-5 max-w-md"
                @click="addBook"
              >
                책장에 담기
              </button>
            </div>
          </div>

          <!--modal-->
          <div class="absolute inset-x-0 bottom-0 grid grid-cols-2 text-xl lg:text-lg w-full">
            <div>
              <modal
                class="absolute top-5 ml-5"
                v-if="toBuy"
                @close="toBuy = false"
              >
                <div slot="body" class="flex flex-row text-black">
                  <a href="http://www.amazon.com/" target="_blank" class="p-3"
                    >Amazon</a
                  >
                  <a href="https://www.alibaba.com/" target="_blank" class="p-3"
                    >Alibaba</a
                  >
                  <a href="https://www.aladin.co.kr" target="_blank" class="p-3"
                    >Aladin</a
                  >
                </div>
              </modal>
            </div>
            <div>
              <modal
                class="absolute top-5 ml-10 w-max"
                v-if="toBookshelf"
                @close="toBookshelf = false"
              >
                <div slot="body" class="text-black text-base pt-3 text-center">
                  <p>책장으로 이동하시겠습니까?</p>
                  <nuxt-link to="/bookshelf">
                    <button
                      class="text-xs mt-3 p-1 pl-3 pr-3 ring-1 ring-gray-600 rounded-sm bg-gray-200"
                    >
                      확인
                    </button>
                  </nuxt-link>
                </div>
              </modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from "./modal.vue"
import { mapGetters } from 'vuex'

export default {
  
  mounted() {
    console.log(this.$route.params.book);
    if (this.$route.params.book) {
      this.book_title = this.$route.params.book._source.title;
      this.book_author = this.$route.params.book._source.author;
      this.book_rate = this.$route.params.book._score;
      this.book_genre = this.$route.params.book._source.genre;
      this.book_id = this.$route.params.book._id;
    }
  },
  computed: {
      ...mapGetters(['loggedInUser','loggedInToken'])
  },
  data() {
    return {
      toBuy: false,
      toBookshelf: false,
      book_title: "",
      book_author: "",
      book_rate: "",
      book_genre: [],
      book_id: "0"
    };
  },
  methods: {
    async goback() {
      await this.$router.back();
    },
    
    addBook(){
    if (!this.$store.state.isAuth) {alert('please login')}
    else{
      this.toBookshelf = true
      const token=this.loggedInToken
      console.log('token:')
      console.log(token)
      var data={book_id:this.book_id, book_title:this.book_title}
      const headers={Authorization: `${token}`}
      this.$axios.post('http://172.16.101.206:5000/bookshelf', data,{
        headers:headers
        }).then((res) => {
          console.log('addbook')
        console.log(res)
        }).catch((error) => {
        console.error(error)
        })
    }
    }
  },
  components: {
    modal: modal
  }
};
</script>
