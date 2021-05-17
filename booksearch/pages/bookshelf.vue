<template>
  <div class="max-w-screen-3xl mx-auto">
  <!--margin_-->
  <div class="mt-10 ml-10 mr-10 md:ml-16 md:mr-16 lg:ml-24 lg:mr-24">
    <!--position-->
    <div class="flex flex-col justify-items-center text-center">
      <p class="mb-6 text-2xl text-gray-600 font-semibold">My Bookshelf</p>

      <div>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3">
          <div class="mx-auto w-40 p-2 border border-gray-300">
            <nuxt-link to="/book">
            <img src="/book.jpg">
            <p class="text-center text-sm p-2">달러구트 꿈 백화점</p>
            </nuxt-link>
            <button class="bg-gray-500 rounded text-sm text-white pl-2 pr-2">삭제</button>
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
export default {

}
</script>