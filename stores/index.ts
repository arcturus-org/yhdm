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

    async playerInfo(vid: string, src: number, volume: number) {
      this.loading = true;

      const res: ViewRes = await $fetch(
        `/api/player?vid=${vid}&src=${src}&volume=${volume}`
      );

      // this.$patch({
      //   detail: res,
      //   loading: false,
      // });
    },
  },
});
