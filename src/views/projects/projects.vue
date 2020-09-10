<template>
  <section class="projects-view container" id="projects">
    <div class="project"></div>
    <div class="project"></div>
    <div class="project"></div>
    <div class="project"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { minesweaper: { tech: ["javascript", "html", "css"] } },
        { memegen: { tech: ["javascript", "html", "css"] } },
        { appsus: { tech: ["vue", "javascript", "css"] } },
        { trend: { tech: ["vue", "node", "sass"] } }
      ]
    };
  }
};
</script>



