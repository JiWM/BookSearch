<template>
  <div class="max-w-screen-3xl mx-auto">
  <!--margin_-->
  <div class="mt-10 ml-10 mr-10 md:ml-16 md:mr-16 lg:ml-24 lg:mr-24">
    <!--position-->
    <div class="flex flex-col justify-items-center text-center">
      <p class="mb-6 text-2xl text-gray-600 font-semibold">My Bookshelf</p>

      <div>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3">
          <div class="mx-auto w-40 p-2 border border-gray-300" v-for="book in myBooks" v-bind:key="book._id">
            <nuxt-link :to="{name: 'book', params: { book: book }}">

            <!--:src="require('../static/book_cover/' + book.id + '.jpg')"-->
            <img :src="require('../static/book_cover/' + book._id + '.jpg')">

            <p class="text-center text-sm p-2" v-bind="book">{{book._source.title}}</p>
            </nuxt-link>
            <button @click="deleteBook" class="bg-gray-500 rounded text-sm text-white pl-2 pr-2">삭제</button>
          </div>
          <div class="mx-auto w-40 p-2 bg-gray-300">
          </div>
          <div class="mx-auto w-40 p-2 bg-gray-300">
          </div>
          <div class="mx-auto w-40 p-2 bg-gray-300">
          </div>
          <div class="mx-auto w-40 p-2 bg-gray-300">
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      myBooks: [
      {
        _id: "0",
        _source: {
          title: ""
        }
      }
    ]
    }
  },
  middleware ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.isAuth) {
      return redirect('/login')
    }
  },
  computed: {
      ...mapGetters(['loggedInUser','loggedInToken'])
  },
  beforeMount(){
    this.getBooks()
  },
  methods:{
    getBooks:function(){
      const token=this.loggedInToken
      console.log('token:')
      console.log(token)
      this.$axios.get('bookshelf', {
        headers:{
          Authorization: `${token}`
        }
        }).then((res) => {
        console.log('bookshelf')
        console.log(res)
        console.log(res.data)
        var getlist=res.data
        for (var key in obj) {
          this.myBooks[key]=getlist[key]
        }
        }).catch((error) => {
        console.error(error)
        })
    },
    deleteBook(){
      const token=this.loggedInToken
      console.log('token:')
      console.log(token)
      this.$axios.post('bookshelf', {
        data:{book_id:this.book_id},
        headers:{
          Authorization: `${token}`
        }
        }).then((res) => {
        console.log(res)
        }).catch((error) => {
        console.error(error)
        })
    }
  }
}
</script>