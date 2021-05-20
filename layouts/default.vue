<template>
  <div>
    <appHeader />
    <searchBar/>
    <Nuxt />
  </div>
</template>
<script>
import appHeader from "../components/appheader";
import searchBar from "../components/searchbar";

export default {
  components: {
    appHeader,
    searchBar
  }
};
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

#content {
  margin: 25px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
@font-face {
  font-family: "InfinitySans-RegularA1";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
</style>
