<template>
  <div>
    <header class="flex flex-row border-b-2 shadow-md">
      <img src="../static/logo.svg" class="object-contain w-16">
      <div class="flex flex-row m-1 p-2 w-2/5 border-2 rounded-md border-gray-400">
        <input type="text" class="w-full">
        <img src="../static/search.png" class="object-contain w-5 float-right">
      </div>
      </header>
    <div id="content">
      <Nuxt/>
    </div>
  </div>
</template>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

#content {
  margin:25px;
  font-family:
    'Noto Sans KR', sans-serif;
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
header {
    height: 80px;
    padding: 10px;
    margin-bottom: 10px;
}
@font-face {
    font-family: 'InfinitySans-RegularA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>
