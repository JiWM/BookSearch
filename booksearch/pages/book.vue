<template>
  <div>
      <bookDetail></bookDetail>
      <bookList></bookList>
  </div>
</template>

<script>
import bookList from '../components/booklist'
import bookDetail from '../components/bookdetail'

export default {
   components:{
      'bookList':bookList,
      'bookDetail':bookDetail
   },
}
</script>
