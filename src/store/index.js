import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    story_null_view: false,
    actual_page: 0,
  },
  getters: {
    getStoreView: (state) => state.story_null_view,
    getActualPage: (state) => state.actual_page,
  },
  mutations: {
    setStory: (state, story_null_view) =>
      (state.story_null_view = story_null_view),
    setPage: (state, newPage) => (state.actual_page = newPage),
  },
});
