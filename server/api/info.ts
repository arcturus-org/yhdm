import { defineEventHandler, getQuery } from 'h3';
import { useRuntimeConfig } from '#imports';
import { infoResolver } from '@server/resolver/info';

export default defineEventHandler(async (event) => {
  const { vid } = getQuery(event);

  const res: string = await $fetch(`/view/${vid}`, {
    baseURL: useRuntimeConfig().public.api,
  });

  return infoResolver(res);
});
