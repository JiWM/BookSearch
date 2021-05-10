<template>
<div class="max-w-screen-3xl mx-auto">
  <div class="flex flex-col md:flex-row m-5 md:m-12 lg:m-16 lg:mt-20">
    <div class="md:flex-shrink-0 mx-auto xl:ml-16">
      <img class="object-scale-down object-center h-full" src="book.jpg">
    </div>
  <div class="flex flex-wrap content-between mx-auto w-full md:ml-10 xl:mr-16 lg:ml-16 p-5">
    <table class="table-fixed w-full">
      <tr>
        <td class="text-2xl align-top w-1/4">TITLE</td>
        <td class="text-left">title</td>
      </tr>
      <tr>
        <td class="text-2xl align-top w-1/4">AUTHOR</td>
        <td class="text-left">author</td>
      </tr>
      <tr>
        <td class="text-2xl align-top w-1/4">REVIEW</td>
        <td class="text-left">review</td>
      </tr>
    </table>
    <div class="grid grid-cols-2 w-full lg:text-xl text-white font-semibold">
      <button class="bg-gray-500 ml-5 mr-10 p-5 max-w-md" @click="showModal = true">구매하기</button>
      <button class="bg-gray-500 ml-10 mr-5 p-5 max-w-md">책장에 담기</button>
      
      <div>
      <modal v-if="showModal" @close="showModal = false">
      <p slot="body" class="text-black">content</p>
      </modal></div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import modal from './modal.vue'

export default {
  data() {
    return {
      showModal:false,
      }
  },
  components: {
    'modal':modal
  }
}
</script>