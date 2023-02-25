import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: (): IState => {
    return {
      home: {
        week: [],
        chinese: {
          l: [],
          h: [],
        },
        american: {
          l: [],
          h: [],
        },
        japanese: {
          l: [],
          h: [],
        },
        movies: {
          l: [],
          h: [],
        },
      },
      loading: true,
      detail: {},
    };
  },
  actions: {
    async homeData() {
      this.loading = true;

      const res: HomeRes = await $fetch('/api/home');

      this.$patch({
        home: res,
        loading: false,
      });
    },

    async detailInfo(vid: string) {
      this.loading = true;

      const res: ViewRes = await $fetch(`/api/detail?vid=${vid}`);

      this.$patch({
        detail: res,
        loading: false,
      });
    },
  },
});
