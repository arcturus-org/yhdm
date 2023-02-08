import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: (): IState => {
    return {
      weeks: {},
      jnew: [],
      jhot: [],
      cnew: [],
      chot: [],
      unew: [],
      uhot: [],
      mnew: [],
      mhot: [],
      loading: true,
    };
  },
  actions: {
    async getHomeData() {
      this.loading = true;

      const res: IHomeDataRes = await $fetch('/api/home');

      this.weeks = res.weeks;

      this.$patch({
        weeks: res.weeks,
        jnew: res.jnew,
        jhot: res.jhot,
        cnew: res.cnew,
        chot: res.chot,
        mnew: res.mnew,
        mhot: res.mhot,
        unew: res.unew,
        uhot: res.uhot,
        loading: false,
      });
    },
  },
});
