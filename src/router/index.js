import Vue from "vue";
import Router from "vue-router";
import Home from "../components/views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});
