<template>
  <div id="app">
    <div class="main">
      <navbar></navbar>
      <!-- <appHeader></appHeader> -->
      <home></home>
    </div>
  </div>
</template>
<script>
import navbar from "./components/navbar/navbar";
// import appHeader from "./components/appHeader/appHeader";
import home from "./views/home/home";

export default {
  name: "Home",
  components: {
    navbar,
    // appHeader,
    home
  }
};
</script>

