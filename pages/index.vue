<template>
  <div v-if="loading" class="loading">
    <v-progress-circular indeterminate color="#1E88E5" />
  </div>

  <div v-else class="pa-4">
    <nx-week />
    <nx-anime type="japanese" title="日本动漫" />
    <nx-anime type="chinese" title="国产动漫" />
    <nx-anime type="american" title="美国动漫" />
    <nx-anime type="movies" title="动漫电影" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@stores';
import { storeToRefs } from 'pinia';
import { onMounted } from '#imports';

const $store = useStore();

const { loading } = storeToRefs($store);

onMounted(() => {
  $store.homeData();
});
</script>
