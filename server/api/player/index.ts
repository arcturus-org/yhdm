import { defineEventHandler, getQuery } from 'h3';
import { useRuntimeConfig } from '#imports';
import { playerResolver } from '@server/resolver/player';

export default defineEventHandler(async (event) => {
  const { vid, src, episode } = getQuery(event);

  const res: string = await $fetch(`/player/${vid}-${src}-${episode}`, {
    baseURL: useRuntimeConfig().public.api as string,
  });

  return playerResolver(res);
});
