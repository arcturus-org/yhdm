import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: (): IState => {
    return {
      home: {
        week: {},
        latest_japanese_anime: [],
        hottest_japanese_anime: [],
        latest_chinese_anime: [],
        hottest_chinese_anime: [],
        latest_american_anime: [],
        hottest_american_anime: [],
        latest_anime_movie: [],
        hottest_anime_movie: [],
      },
      loading: true,
    };
  },
  actions: {
    async homeData() {
      this.loading = true;

      const res: HomeRes = await $fetch('/api/home');

      this.$patch({
        home: res,
        // loading: false,
      });
    },
  },
});
