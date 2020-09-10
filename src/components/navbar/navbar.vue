<template>
  <nav class="navContainer">
    <div class="mobileNavBtn" @click="toggleMenu"></div>
    <div class="navBar" @click="toggleMenu" :class="{showen: menuToggler}">
      <!-- <div :class="{showen: menuToggler}" @click="toggleMenu" class="screen"></div> -->
      <nav class="navLinks flex">
        <a
          class="navLink"
          :to="'/#projects'"
          @click.native="scrollFix('#scroll')"
          exact
          v-smooth-scroll
          href="#projects"
        >Projects</a>
        <a
          class="navLink"
          :to="'/#contactMe'"
          @click.native="scrollFix('#scroll')"
          exact
          href="#contactMe"
          v-smooth-scroll
        >Contact me</a>
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
    },
    scrollFix: function(hash) {
      location.hash = hash;
    }
  }
};
</script>
