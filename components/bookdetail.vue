<template>
  <div class="max-w-screen-3xl mx-auto">
    <div class="m-5 md:m-12 lg:m-16">
      <nuxt-link to="/searchlist">
      <p class="ml-20 xl:ml-16 mb-5 text-gray-500">
        <span class="pr-1"><font-awesome-icon :icon="['fas', 'angle-double-left']"/></span>검색 목록으로
      </p>
    </nuxt-link>
        <!--container-->

      <div class="flex flex-col md:flex-row">
        <!--image-->
        <div class="md:flex-shrink-0 mx-auto ml-20 xl:ml-16">
          <img class="object-scale-down object-center h-full" src="book.jpg" />
        </div>
        <!--description-->
        <div
          class="relative flex flex-wrap mx-auto w-full md:ml-6 xl:ml-10 mr-20 xl:mr-16 lg:ml-16 p-5"
        >
          <div class="h-full">
            <table class="table-fixed w-full">
              <tr>
                <td class="align-top text-xs md:text-sm lg:text-lg xl:text-xl w-1/4">TITLE</td>
                <td class="text-left text-2xs md:text-sm lg:text-lg">{{propsdata.title}}</td>
              </tr>
              <tr>
                <td class="align-top text-xs md:text-sm lg:text-lg xl:text-xl">AUTHOR</td>
                <td class="text-left text-2xs md:text-sm lg:text-lg">{{propsdata.author}}</td>
              </tr>
              <tr>
                <td class="align-top text-xs md:text-sm lg:text-lg xl:text-xl break-all">DESCRIPTION</td>
                <td class="text-left text-2xs md:text-sm lg:text-lg">{{propsdata.description}}</td>
              </tr>
            </table>

            <!--button-->
            <div class="absolute inset-x-0 bottom-0 grid grid-cols-2 w-full text-sm lg:text-xl text-white font-semibold">
              <button
                class="bg-gray-500 mr-5 lg:ml-5 lg:mr-10 p-5 max-w-md"
                @click="toBuy = true"
              >
                구매하기
              </button>
              <button
                class="bg-gray-500 ml-5 lg:ml-10 lg:mr-5 p-5 max-w-md"
                @click="toBookshelf = true"
              >
                책장에 담기
              </button>
            </div>
          </div>

          <!--modal-->
          <div class="absolute inset-x-0 bottom-0 grid grid-cols-2 text-xl lg:text-lg w-full">
            <div>
              <modal
                class="absolute top-5 ml-5"
                v-if="toBuy"
                @close="toBuy = false"
              >
                <div slot="body" class="flex flex-row text-black">
                  <div class="p-3">store1</div>
                  <div class="p-3">store2</div>
                  <div class="p-3">store3</div>
                </div>
              </modal>
            </div>
            <div>
              <modal
                class="absolute top-5 ml-10 w-max"
                v-if="toBookshelf"
                @close="toBookshelf = false"
              >
                <div slot="body" class="text-black text-base pt-3 text-center">
                  <p>책장으로 이동하시겠습니까?</p>
                  <nuxt-link to="/bookshelf">
                    <button
                      class="text-xs mt-3 p-1 pl-3 pr-3 ring-1 ring-gray-600 rounded-sm bg-gray-200"
                    >
                      확인
                    </button>
                  </nuxt-link>
                </div>
              </modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from "./modal.vue";

export default {
  props:['propsdata'],
  data() {
    return {
      toBuy: false,
      toBookshelf: false
    };
  },
  components: {
    modal: modal
  }
};
</script>
