<template>
  <div
    v-if="loading"
    class="d-flex justify-center align-center"
    style="flex-grow: 1;"
  >
    <v-progress-circular indeterminate color="#1E88E5"></v-progress-circular>
  </div>

  <div v-else class="pa-4">
    <Week />
    <Anime type="japan" title="日本动漫"/>
    <Anime type="china" title="国产动漫"/>
    <Anime type="usa" title="美国动漫"/>
    <Anime type="movies" title="动漫电影"/>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@stores';
import { storeToRefs } from 'pinia';
import { onMounted } from '#imports';

const $store = useStore();

const { loading } = storeToRefs($store);

onMounted(() => {
  $store.getHomeData();
});
</script>
