<template>
  <section class="home">
    <div class="img1">
      <div class="free-text">
        <transition appear name="fade">
          <span class="border">My protfolio + picture</span>
        </transition>
      </div>
    </div>
    <div class="img2">
      <div class="text-container">
        <p class="free-text">
          I’m an enthusiastic junior full stack web developer who specializes in front-end technologies.
          <br />highly motivated, capable of adapting to rapidly changing environments and
          I’m an Independent learner and always ready to face new challenges. I’m skilled in writing single-page applications using the latest web technologies.
        </p>
      </div>
    </div>
    <div class="img3">
      <div class="free-text">
        <projects></projects>
      </div>
    </div>
    <div class="img1">
      <div class="free-text">
        <span class="border">Vladimir Eygel</span>
      </div>
    </div>
    <section class="footer">
      <h2>footer</h2>
    </section>
  </section>
</template>

<script>
import projects from "../projects/projects";
export default {
  name: "Home",
  components: {
    projects
  }
};
</script>
