<template>
  <div>
    <bookDetail v-bind:propsdata="bookInfo"></bookDetail>
    <bookList class="bg-gray-200"></bookList>
  </div>
</template>

<script>
import bookList from "../components/booklist";
import bookDetail from "../components/bookdetail";

export default {
  components: {
    bookList: bookList,
    bookDetail: bookDetail
  },
  data() {
    return {
      bookInfo: {
        id:"1",
        title:"달러구트 꿈 백화점",
        author:"이미예",
        description:"잠들어야만 입장 가능한 꿈 백화점에서 일어나는 비밀스럽고도 기묘하며 가슴 뭉클한 판타지 소설, 여기는 잠들어야만 입장할 수 있는 ‘달러구트 꿈 백화점’입니다."
      }
    }
  }
};
</script>
