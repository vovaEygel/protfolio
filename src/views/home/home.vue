<template>
  <section class="home">
    <div class="img1">
      <div class="free-text">
        <transition appear name="fade"></transition>
      </div>
    </div>
    <div class="img2">
      <div class="text-container">
        <p class="free-text container">
          I’m an enthusiastic junior full stack web developer who specializes in front-end technologies.
          <br />highly motivated, capable of adapting to rapidly changing environments and
          I’m an Independent learner and always ready to face new challenges. I’m skilled in writing single-page applications using the latest web technologies.
        </p>
      </div>
    </div>
    <div class="img3">
      <div class="free-text"></div>
      <tech></tech>
    </div>
    <div class="img4">
      <div class="free-text"></div>
      <projects></projects>
    </div>
    <div class="img5">
      <contactMe></contactMe>
    </div>
    <div class="img1 smaller">
      <footerCmp></footerCmp>
    </div>
  </section>
</template>

<script>
import projects from "../projects/projects";
import tech from "../../components/tech/tech";
import footerCmp from "../../components/footerCmp/footerCmp";
import contactMe from "../../views/contactMe/contactMe";

export default {
  name: "Home",
  components: {
    projects,
    footerCmp,
    contactMe,
    tech
  }
};
</script>
