<template>
  <Head>
    <Title>{{ $store.player.video.name }}</Title>
  </Head>

  <div v-if="loading" class="loading">
    <v-progress-circular indeterminate color="#1E88E5" />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, onMounted, useRoute } from '#imports';
import { useStore } from '@stores';
import { storeToRefs } from 'pinia';

definePageMeta({
  layout: 'detail',
});

const $route = useRoute();
const $store = useStore();

const { loading } = storeToRefs($store);

onMounted(() => {
  $store.playerInfo($route.params.pid as string);
});
</script>
