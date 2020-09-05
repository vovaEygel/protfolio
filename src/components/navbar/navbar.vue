<template>
  <nav class="navContainer">
    <div class="mobileNavBtn" @click="toggleMenu"></div>
    <div class="navBar" @click="toggleMenu" :class="{showen: menuToggler}">
      <!-- <div :class="{showen: menuToggler}" @click="toggleMenu" class="screen"></div> -->
      <nav class="navLinks flex">
        <router-link class="navLink projects" to="/projects">Projects</router-link>
        <router-link class="navLink contactMe" to="/contactMe">Contact Me</router-link>
      </nav>
      <div class="screen" @click="toggleMenu"></div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      menuToggler: false,
      mobileToggler: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuToggler = !this.menuToggler;
    }
  }
};
</script>>
