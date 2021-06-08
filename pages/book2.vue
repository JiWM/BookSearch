<template>
  <div>
    <bookDetail ></bookDetail>
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
};
</script>
