<template>
  <div v-if="loading" class="loading">
    <v-progress-circular indeterminate color="#1E88E5" />
  </div>

  <div v-else class="pa-4"></div>
</template>

<script setup lang="ts">
import { definePageMeta, onMounted, useRoute } from '#imports';
import { storeToRefs } from 'pinia';
import { useStore } from '@stores';

definePageMeta({
  layout: 'detail',
});

const $route = useRoute();
const $store = useStore();

const { loading } = storeToRefs($store);

onMounted(() => {
  $store.detailInfo($route.params.vid as string);
});
</script>
