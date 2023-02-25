<template>
  <v-app-bar :elevation="0" class="border-b w-100" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        class="d-sm-none"
        variant="text"
        @click.stop="drawer = !drawer"
      />
    </template>

    <v-toolbar-title>
      <div class="d-flex align-center justify-start">
        <img src="/favicon.svg" alt="logo" class="logo" />
        <div class="mr-4 ml-2">{{ $config.public.name }}</div>

        <v-row no-gutters class="d-none d-sm-flex flex-grow-0">
          <v-col
            class="mr-1"
            v-for="(item, index) in navigations"
            :key="item.name"
          >
            <v-btn
              :href="item.to"
              :color="current[index] ? '#1565C0' : undefined"
              :variant="current[index] ? 'tonal' : undefined"
            >
              {{ item.name }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    :elevation="0"
    location="left"
    temporary
    class="d-sm-none"
  >
    <v-list nav>
      <v-list-item v-for="item in navigations" :key="item.name" :href="item.to">
        {{ item.name }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig, useRoute, ref } from '#imports';

const $config = useRuntimeConfig();
const $route = useRoute();

const navigations = [
  { name: '首页', to: '/' },
  { name: '日本动漫', to: '/japanese' },
  { name: '国产动漫', to: '/chinese' },
  { name: '美国动漫', to: '/american' },
  { name: '动漫电影', to: '/movies' },
];

const current = computed(() =>
  navigations.map((nav) => $route.path === nav.to)
);

const drawer = ref(false);
</script>

<style scoped>
.logo {
  width: 24px;
  height: 24px;
}
</style>
