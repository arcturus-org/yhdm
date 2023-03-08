import { defineEventHandler, getQuery } from 'h3';
import { useRuntimeConfig } from '#imports';
import { playerResolver } from '@server/resolver/player';

export default defineEventHandler(async (event) => {
  const { pid } = getQuery(event);

  const res: string = await $fetch(`/player/${pid}`, {
    baseURL: useRuntimeConfig().public.api,
  });

  return playerResolver(res);
});
