<template>
  <nav class="navbar-container flex row flex-start">
    <div class="navbar flex align-center">
      <div @click="isShowen = !isShowen" class="hamburger-btn fa fa-bars"></div>
      <div :class="{showen: isShowen}" @click="isShowen = !isShowen" class="screen"></div>
      <div
        @click="isShowen = !isShowen"
        :class="{showen: isShowen}"
        class="navbar-btns flex align-center space-between"
      >
        <div class="navbar-routings">
          <router-link class="home-page-btn nav-btn" to="/">Home</router-link>
          <router-link class="nav-btn" to="/login">Login</router-link>
          <router-link class="nav-btn" to="/signup">Signup</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "app-header",
  //for demo purposes
  data() {
    return {
      loggedInUser: null,
      demoUser: {
        userType: "influencer",
        username: "kianetti8",
        password: "ij7QdH"
      },
      isShowen: false
    };
  },
  methods: {
    async demoInfluencer() {
      let demoUser = this.$store.getters.demoInfluencer;
      if (!demoUser) demoUser = this.demoUser;
      await this.$store.dispatch({
        type: "demoLogin",
        credentials: demoUser
      });
      this.$router.push("/backoffice");
    }
  }
};
</script>

<style>
</style>