<template>
  <div class="h-100 mx-5 my-5 row equal">
    <app-error v-if="error"></app-error>
    <app-loader v-else-if="loading"></app-loader>
    <v-lazy
      v-else
      v-for="(article, index) in info.hits"
      :key="index"
      class="col-12 col-sm-6 col-md-3"
      v-model="isActive"
      :options="{
        threshold: 1,
      }"
      min-height="200"
      transition="fade-transition"
    >
      <article-card
        v-if="article.story_url || $store.getters.getStoreView"
        :story_title="article.story_title"
        class="text-start"
        :author="article.author"
        :created_at="article.created_at"
        :story_url="article.story_url"
        :comment_text="article.comment_text"
        :tags="article._tags"
      ></article-card>
      <div
        v-else
        class="h-100 d-flex align-items-center justify-content-center blur mx-auto shadow"
        style="max-width: 344px"
      >
        <span class="text-secondary">Article not available</span>
      </div>
    </v-lazy>
  </div>
</template>

<script>
import axios from "axios";
import AppLoader from "../AppLoader.vue";
import AppError from "../AppError.vue";
import ArticleCard from "../ArticleCard.vue";
export default {
  name: "home-view",
  components: { AppLoader, AppError, ArticleCard },
  data() {
    return {
      info: null,
      loading: true,
      error: false,
      textError: "",
      isActive: false,
    };
  },
  methods: {},
  beforeMount() {
    axios
      .get("https://hn.algolia.com/api/v1/search_by_date?query=coding")
      .then((response) => {
        this.info = response.data;
      })
      .catch((error) => {
        this.textError = error;
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped>
.blur {
  backdrop-filter: blur(5px);
  background: #e5e8e6;
  opacity: 55%;
}
</style>
