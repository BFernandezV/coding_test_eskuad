<template>
  <v-card
    class="mx-auto footer-widget d-flex flex-column justify-content-between"
    max-width="344"
  >
    <v-card-text class="mt-2">
      <div class="mb-2">{{ date }}</div>
      <p class="fs-4 text-dark">{{ story_title || "No title" }}</p>
      <p>Author: {{ author }}</p>
      <a :href="story_url" class="link-primary">{{ story_url }}</a>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="#00365f" class="fw-bold" @click.stop="dialog = true">
        View More
      </v-btn>
    </v-card-actions>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          {{ story_title || "No title" }}
        </v-card-title>

        <v-card-text class="text-start comments">
          {{ comment_text || "No comments" }}
        </v-card-text>

        <div class="d-flex justify-content-center">
          <div v-for="(tag, index) in tags" :key="index">
            <v-chip class="ma-2 text-white" :color="colors[getRandomInt(5)]">
              {{ tag }}
            </v-chip>
          </div>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "article-card",

  props: {
    story_title: String,
    author: String,
    created_at: String,
    story_url: String,
    comment_text: String,
    tags: Array,
  },
  data() {
    return {
      dialog: false,
      colors: ["green", "red", "primary", "pink", "cyan"],
    };
  },
  computed: {
    date() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(this.created_at).toLocaleDateString("en-US", options);
    },
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
  },
};
</script>

<style scoped>
.footer-widget {
  height: 100%;
  width: 100%;
}
.comments {
  text-align: justify !important;
}
</style>
