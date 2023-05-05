<template>
  <nx-navbar current="/" />
  <div class="pa-4">
    <nx-week :week="data!.week" />
    <nx-anime title="日本动漫" :video="data!.japanese" />
    <nx-anime title="国产动漫" :video="data!.chinese" />
    <nx-anime title="美国动漫" :video="data!.american" />
    <nx-anime title="动漫电影" :video="data!.movies" />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '#imports';

const { data } = await useFetch<HomeRes>('/api/home');
</script>
