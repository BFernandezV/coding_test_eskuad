import axios from "axios";
export default {
  getDataArticles() {
    axios
      .get("https://hn.algolia.com/api/v1/search_by_date?query=coding")
      .then((response) => {
        this.info = response.data.bpi;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
