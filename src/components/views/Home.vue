<template>
  <div class="h-100">
    <div class="mx-5 my-5 row h-100">
      <app-error v-if="error"></app-error>
      <app-loader v-else-if="loading"></app-loader>
      <v-lazy
        v-else
        v-for="(article, index) in info.hits"
        :key="index"
        class="col-12 col-sm-6 col-md-3"
        v-model="article.isActive"
        :options="{
          threshold: 1,
        }"
        min-height="200"
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
          class="d-flex align-items-center justify-content-center blur mx-auto shadow h-100"
          style="max-width: 344px"
        >
          <span class="text-secondary">Article not available</span>
        </div>
      </v-lazy>
    </div>
    <v-btn
      class="m-2 text-white fw-bold"
      color="#00365f"
      v-if="!loading || !finalPage"
      elevation="1"
      @click="getArticlesByPage()"
      :loading="!finishRequest"
      >Load more</v-btn
    >
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
      info: { hits: [] },
      loading: true,
      error: false,
      textError: "",
      isActive: false,
      finishRequest: true,
      finalPage: false,
    };
  },
  methods: {
    getArticlesByPage() {
      const actualPage = this.$store.getters.getActualPage;
      if (actualPage + 1 >= this.info.nbPages) {
        this.finalPage = true;
        return;
      }
      this.finishRequest = false;
      axios
        .get(
          `https://hn.algolia.com/api/v1/search_by_date?query=coding&page=${actualPage}`
        )
        .then((response) => {
          let mergeResult = [...this.info.hits, ...response.data.hits];
          this.info = response.data;
          this.info.hits = mergeResult;
          this.$store.commit("setPage", actualPage + 1);
        })
        .catch((error) => {
          this.textError = error;
          console.log(error);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
          this.finishRequest = true;
        });
    },
  },
  beforeMount() {
    this.getArticlesByPage();
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
