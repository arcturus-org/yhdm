import { defineEventHandler } from 'h3';
import { useRuntimeConfig } from '#imports';
import { homeResolver } from '../resolver';

export default defineEventHandler(async () => {
  const res: string = await $fetch('/', { baseURL: useRuntimeConfig().public.api });

  return homeResolver(res);
});
