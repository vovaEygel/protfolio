<template>
  <div class="navBar">
    <div class="mobileNavBtn" @click="toggleMenu"></div>
    <nav class="navLinks flex">
      <router-link class="navLink projects" to="/projects">Projects</router-link>
      <router-link class="navLink contactMe" to="/contactMe">Contact Me</router-link>
    </nav>
    <div class="screen"></div>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      menuToggler: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuToggler = !this.menuToggler;
      console.log("fff");
    }
  }
};
</script>>
