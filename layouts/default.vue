<template>
  <v-layout style="min-height: 100vh" class="flex-column">
    <v-app-bar :elevation="0" class="border-b">
      <template v-slot:prepend>
        <div class="mx-4">樱花动漫</div>
        <v-row noGutters>
          <v-col class="mx-1" v-for="(item, index) in navigations" :key="index">
            <v-btn
              :href="item.to"
              :color="$route.path === item.to ? '#1565C0' : undefined"
              :variant="$route.path === item.to ? 'tonal' : undefined"
            >
              {{ item.name }}
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-app-bar>
    <v-main style="flex-grow: 1" class="d-flex">
      <slot />
    </v-main>

    <div class="text-center footer">
      Power by
      <a target="_blank" href="https://nuxt.com/" class="text-decoration-none">
        Nuxt3 </a
      >, data from
      <a target="_blank" :href="config.public.api" class="text-decoration-none">
        动漫花园
      </a>
    </div>
  </v-layout>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports';

const navigations = [
  { name: '首页', to: '/' },
  { name: '日本动漫', to: '/japan' },
  { name: '国产动漫', to: '/china' },
  { name: '美国动漫', to: '/usa' },
  { name: '动漫电影', to: '/movies' },
];

const config = useRuntimeConfig();
</script>

<style lang="scss" scoped>
.footer {
  height: 40px;
  line-height: 40px;
  background-color: #fafafa;
}
</style>
