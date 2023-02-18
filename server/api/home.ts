import { defineEventHandler } from 'h3';
import { useRuntimeConfig } from '#imports';
import { homeResolver } from '@server/resolver';

// obtains home page data and processes it
export default defineEventHandler(async () => {
  const res: string = await $fetch('/', {
    baseURL: useRuntimeConfig().public.api,
  });

  return homeResolver(res);
});
