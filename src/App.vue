<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <v-container fluid class="h-100">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: { AppHeader },
};
</script>

<style scoped>
#app {
  box-sizing: border-box;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  padding: 0;
}

.container {
  padding-bottom: 4rem;
}
</style>
