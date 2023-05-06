<template>
  <v-navigation-drawer v-model="drawer" temporary :elevation="0" class="d-md-none">
    <div class="d-flex align-center pa-4">
      <img src="/favicon.svg" alt="logo" class="logo" />
      <div class="mr-4 ml-2">{{ $config.public.name }}</div>
    </div>

    <v-list nav density="compact">
      <v-list-item
        active-color="#1565C0"
        v-for="item in navigations"
        :active="current === item.to"
        :key="item.name"
        :href="item.to"
      >
        {{ item.name }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar :elevation="0" class="border-b w-100" density="comfortable">
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />

    <v-toolbar-title class="nx-title-wrapper">
      <div class="d-flex align-center justify-start">
        <a class="d-flex align-center text-decoration-none" href="/">
          <img src="/favicon.svg" alt="logo" class="logo d-none d-sm-flex" />
          <div class="mr-4 ml-2 d-none d-sm-flex">{{ $config.public.name }}</div>
        </a>

        <v-row no-gutters class="d-none d-md-flex flex-grow-0">
          <v-col class="mr-1" v-for="item in navigations" :key="item.name">
            <v-btn
              :href="item.to"
              :color="current === item.to ? '#1565C0' : undefined"
              :variant="current === item.to ? 'tonal' : undefined"
            >
              {{ item.name }}
            </v-btn>
          </v-col>
        </v-row>

        <v-text-field
          density="compact"
          class="nx-search-wrapper"
          variant="plain"
          color="#1565C0"
          placeholder="搜索"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          v-model="searchText"
          @keydown.enter.prevent="search"
        />

        <v-spacer class="d-none d-sm-flex" />
        <v-btn class="d-none d-sm-flex" icon="mdi-github" :href="$config.public.github" target="_blank"></v-btn>
      </div>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRuntimeConfig, useRoute, useRouter, ref } from '#imports';
import { log } from '@utils/log';

defineProps<{ current?: string }>();

const $config = useRuntimeConfig();
const $route = useRoute();
const $router = useRouter();

log(`current-route: ${$route.path}`);

const navigations = [
  {
    name: '首页',
    to: '/',
  },
  {
    name: '日本动漫',
    to: '/japanese',
  },
  {
    name: '国产动漫',
    to: '/chinese',
  },
  {
    name: '美国动漫',
    to: '/american',
  },
  {
    name: '动漫电影',
    to: '/movies',
  },
];

const drawer = ref(false);

const searchText = ref($route.query.key as string);

const search = () => {
  if (searchText.value) {
    log(`search key: ${searchText.value}`);

    $router.push({
      path: '/search',
      query: {
        key: searchText.value,
      },
    });
  }
};
</script>

<style scoped lang="scss">
.logo {
  width: 24px;
  height: 24px;
}

.nx-title-wrapper {
  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
}

.nx-search-wrapper {
  @media screen and (min-width: 600px) {
    flex-grow: 0;
    width: 200px;
    margin-left: 12px;
  }

  flex-grow: 1;
  margin-right: 12px;
  padding: 2px 12px 2px 18px;
  border-radius: 20px;
  background-color: #eee;
}

:deep(.v-field__input) {
  padding-top: 0;
}

:deep(.v-field__append-inner) {
  padding-top: 0;
  display: flex;
  align-items: center;
}
</style>
