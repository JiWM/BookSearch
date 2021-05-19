<template>
  <div class="flex justify-around">
    <div style="width:100vw">
      <bookList />
    </div>
  </div>
</template>

<script>
import bookList from "../components/booklist";
import Side from "../components/sidebar.vue";

export default {
  layout: "list",
  components: {
    bookList: bookList,
    Side: Side
  }
};
</script>
