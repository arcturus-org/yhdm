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
      detail: {
        video: {
          type: {
            c: '',
            r: '',
          },
          id: '',
          name: '',
          rating: {
            star: 0,
            score: 0,
            ratewords: '',
          },
          status: '',
          updateTime: undefined,
          cover: '',
          actors: [],
          director: [],
          category: '',
          region: '',
          year: '',
          introduction: '',
          playList: [],
        },
        like: [],
        hot: [],
      },
      player: {
        like: [],
        video: {
          url: '',
          nextUrl: '',
          name: '',
          year: '',
          updateTime: '',
          id: '',
          type: '',
          region: '',
          score: '',
          playList: [],
          like: 0,
          negative: 0,
        },
      },
      search: {
        search: [],
        hot: [],
        page: 0,
      },
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

      const res: ViewRes = await $fetch(`/api/info?vid=${vid}`);

      this.$patch({
        detail: res,
        loading: false,
      });
    },

    async playerInfo(pid: string) {
      this.loading = true;

      const res: Player = await $fetch(`/api/player?pid=${pid}`);

      this.$patch({
        player: res,
        loading: false,
      });
    },

    async searchInfo(key: string) {
      this.loading = true;

      const res: SearchRes = await $fetch(`/api/search?key=${key}`);

      this.$patch({
        search: res,
        loading: false,
      });
    },
  },
});
