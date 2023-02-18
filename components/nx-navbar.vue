<template>
  <v-app-bar :elevation="0" class="border-b">
    <template v-slot:prepend>
      <img src="/favicon.svg" alt="logo" class="logo" />
      
      <div class="mr-4 ml-2">{{ $config.public.name }}</div>

      <v-row noGutters>
        <v-col class="mx-1" v-for="(item, index) in navigations" :key="index">
          <v-btn
            :href="item.to"
            :color="current[index] ? '#1565C0' : undefined"
            :variant="current[index] ? 'tonal' : undefined"
          >
            {{ item.name }}
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig, useRoute } from '#imports';

const $config = useRuntimeConfig();
const $route = useRoute();

const navigations = [
  { name: '首页', to: '/' },
  { name: '日本动漫', to: '/japan' },
  { name: '国产动漫', to: '/china' },
  { name: '美国动漫', to: '/usa' },
  { name: '动漫电影', to: '/movies' },
];

const current = computed(() => navigations.map((nav) => $route.path === nav.to));
</script>

<style scoped>
.logo {
  width: 24px;
  height: 24px;
}
</style>
