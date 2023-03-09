<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    :elevation="0"
    class="d-sm-none"
  >
    <div class="d-flex align-center pa-4">
      <img src="/favicon.svg" alt="logo" class="logo" />
      <div class="mr-4 ml-2">{{ $config.public.name }}</div>
    </div>

    <v-list nav density="compact">
      <v-list-item
        active-color="#1565C0"
        v-for="(item, index) in navigations"
        :active="current[index]"
        :key="item.name"
        :href="item.to"
      >
        {{ item.name }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar :elevation="0" class="border-b w-100" density="comfortable">
    <v-app-bar-nav-icon class="d-sm-none" @click="drawer = !drawer" />

    <v-toolbar-title>
      <div class="d-flex align-center justify-start">
        <img src="/favicon.svg" alt="logo" class="logo d-none d-sm-flex" />
        <div class="mr-4 ml-2 d-none d-sm-flex">{{ $config.public.name }}</div>

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

        <v-text-field
          density="compact"
          class="flex-grow-0"
          variant="outlined"
          style="width: 300px"
          color="#1565C0"
          label="搜索"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          v-model="searchText"
          @keydown.enter.prevent="search"
        />
      </div>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig, useRoute, useRouter, ref } from '#imports';
import { log } from '@utils';

const $config = useRuntimeConfig();
const $route = useRoute();
const $router = useRouter();

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

const searchText = ref('');
const search = () => {
  if (searchText.value) {
    log(`您搜索了 ${searchText.value}`);

    $router.push({
      path: '/search',
      query: {
        key: searchText.value,
      },
    });
  }
};
</script>

<style scoped>
.logo {
  width: 24px;
  height: 24px;
}
</style>
