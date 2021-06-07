<template>
  <div class="max-w-screen-3xl mx-auto">
  <!--margin_-->
  <div class="mt-10 ml-10 mr-10 md:ml-16 md:mr-16 lg:ml-24 lg:mr-24">
    <!--position-->
    <div class="flex flex-col justify-items-center text-center">
      <p class="mb-6 text-2xl text-gray-600 font-semibold">My Bookshelf</p>

      <div>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3">
          <div class="relative mx-auto w-40 p-2 border border-gray-300" v-for="book in myBooks" v-bind:key="book[0]">
            <nuxt-link :to="{name: 'book2', params: { book: book }}">

            <!--:src="require('../static/book_cover/' + book.id + '.jpg')"-->
            <img :src="require('../static/book_cover/' + book[0] + '.jpg')">

            <p class="text-center text-sm p-2 mb-4" >{{book[1]}}</p>
            </nuxt-link>
            <button @click="deleteBook(book[0])" class="absolute right-0 -bottom-0 m-2 bg-gray-500 rounded text-sm text-white pl-2 pr-2">삭제</button>
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
      this.$axios.get('http://172.16.101.206:5000/bookshelf', {
        headers:{
          Authorization: `${token}`
        }
        }).then((res) => {
        console.log('bookshelf')
        console.log(res)
        var booklist=res.data
        for (var key in booklist) {
          this.myBooks.push(booklist[key])
        }
        console.log(myBooks)
        }).catch((error) => {
        console.error(error)
        })
    },
    deleteBook(id){
      const token=this.loggedInToken
      console.log('token:')
      console.log(token)
      this.$axios.post('http://172.16.101.206:5000/bookshelf',
        {data:{book_id:id}},{
        headers:{
          Authorization: `${token}`
        }
        }).then((res) => {
        console.log(res)
        this.$router.go();
        }).catch((error) => {
        console.error(error)
        })
    }
  }
}
</script>