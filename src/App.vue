<template>
  <div id="app">
    <div class="main">
      <navbar></navbar>
      <home></home>
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar/navbar";
import home from "./views/home/home";

export default {
  name: "Home",
  components: {
    navbar,
    home
  }
};
</script>

