<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center gap-3 h-100"
  >
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <span class="fs-5 text-secondary">Loading articles</span>
  </div>
</template>

<script>
export default {
  name: "app-loader",
};
</script>
