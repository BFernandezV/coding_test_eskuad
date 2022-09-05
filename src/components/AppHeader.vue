<template>
  <div class="container-fluid shadow-sm sticky-top bg-white" style="z-index: 1">
    <div class="row align-items-center justify-content-between">
      <div
        class="container_title col col-sm-4 col-md-4 d-flex flex-column text-start"
      >
        <span class="fs-3">Coding Test</span>
        <span id="author" class="text-secondary"
          >Benjamín Cristóbal Fernández Vera</span
        >
      </div>
      <div class="col-6 col-sm-4 col-md-4">
        <v-img
          max-height="100"
          max-width="100"
          src="./../assets/eskuad_logo.png"
          class="mx-auto"
        ></v-img>
      </div>
      <div
        class="col-6 col-sm-4 col-md-4 d-flex justify-content-end align-items-center gap-3"
      >
        <span class="text-secondary">{{
          switchStoryView
            ? "Hide articles without link"
            : "See articles without link"
        }}</span>
        <v-switch
          v-model="switchStoryView"
          @click="() => this.$store.commit('setStory', switchStoryView)"
        ></v-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      switchStoryView: false,
    };
  },
};
</script>

<style scoped>
.container {
  background-color: #fff;
}

@media (max-width: 959px) {
  #author {
    display: none;
  }
}

@media (max-width: 600px) {
  .container_title {
    display: none !important;
  }
}
</style>
