<template>
  <div class="p-8">
    <div
      class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6"
    >
      <div
        v-for="book in this.$route.params.booklist.slice(0, 5)"
        v-bind:key="book.id"
        class="w-40 mx-auto text-center"
      >
        <img
          :src="require('../static/book_cover/' + book._id + '.jpg')"
          class="my-auto mx-auto"
        />
        {{ book._source.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
