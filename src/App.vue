<template>
  <div id="app">
    <div class="main">
      <navbar></navbar>
      <home></home>
      <!-- <footerCmp></footerCmp> -->
    </div>
  </div>
</template>
<script>
import navbar from "./components/navbar/navbar";
import home from "./views/home/home";
// import footerCmp from "./components/footerCmp/footerCmp";
export default {
  name: "Home",
  components: {
    navbar,
    home
    // footerCmp
  }
};
</script>

