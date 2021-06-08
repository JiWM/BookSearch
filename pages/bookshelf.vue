<template>
  <div class="max-w-screen-3xl mx-auto">
  <!--margin_-->
  <div class="mt-10 ml-10 mr-10 md:ml-16 md:mr-16 lg:ml-24 lg:mr-24">
    <!--position-->
    <div class="flex flex-col justify-items-center text-center">
      <p class="mb-6 text-2xl text-gray-600 font-semibold">My Bookshelf</p>

      <div>
        <div v-if="myBooks.length==0" class="container w-4/5 h-64 bg-gray-200 text-center align-middle text-gray-400">BOOKSHELF IS EMPTY</div>
        <div v-else class="relative grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 pt-5 pb-5 bg-gray-200">
          <div class="relative mx-auto w-40 p-2 bg-white border border-gray-400" v-for="book in myBooks" v-bind:key="book[0]">
            <nuxt-link :to="{name: 'book2', params: { book: book }}">

            <!--:src="require('../static/book_cover/' + book.id + '.jpg')"-->
            <img :src="require('../static/book_cover/' + book[0] + '.jpg')">

            <p class="text-center text-sm p-2 mb-4" >{{book[1]}}</p>
            </nuxt-link>
            <button @click="deleteBook(book[0])" class="absolute right-0 -bottom-0 m-2 bg-gray-500 rounded text-sm text-white pl-2 pr-2">삭제</button>
          </div>
          
            <button @click="deleteAll()" class="absolute right-0 -bottom-10 m-2 bg-gray-500 rounded text-sm text-white pl-2 pr-2">전체 비우기</button>
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
      this.myBooks=[]
      this.$axios.get('http://13.209.42.183:5000/bookshelf', {
        headers:{
          Authorization: `${this.loggedInToken}`
        }
        }).then((res) => {
        console.log('bookshelf')
        console.log(res)
        var booklist=res.data
        for (var key in booklist) {
          this.myBooks.push(booklist[key])
        }
        console.log(this.myBooks)
        }).catch((error) => {
        console.error(error)
        })
    },
    deleteBook(id){
      var data={book_id:id}
      const headers={Authorization: `${this.loggedInToken}`}
      this.$axios.delete('http://13.209.42.183:5000/bookshelf',{
        headers:headers, data:data
        }).then((res) => {
        console.log(res)
        this.getBooks()
        }).catch((error) => {
        console.error(error)
        })
    },
    deleteAll(){
      var list=this.myBooks
      const headers={Authorization: `${this.loggedInToken}`}
        for (var key in list) {
          var data={book_id:list[key][0]}
          console.log(data)
      this.$axios.delete('http://13.209.42.183:5000/bookshelf',{
        headers:headers, data:data
        }).then((res) => {
        //console.log(res)
        }).catch((error) => {
        console.error(error)
        })
        }
        this.getBooks()
    }
  }
}
</script>