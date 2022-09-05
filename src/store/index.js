import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    story_null_view: false,
  },
  getters: {
    getStoreView: (state) => state.story_null_view,
  },
  mutations: {
    setStory: (state, story_null_view) =>
      (state.story_null_view = story_null_view),
  },
});
