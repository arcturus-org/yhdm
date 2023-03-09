import { defineEventHandler, getQuery } from 'h3';
import { useRuntimeConfig } from '#imports';
import { searchResolver } from '@server/resolver/search';

export default defineEventHandler(async (event) => {
  const { key, page } = getQuery(event);

  const res: string = await $fetch(
    `/search.asp?searchword=${key}&page=${page}`,
    {
      baseURL: useRuntimeConfig().public.api,
    }
  );

  return searchResolver(res);
});
