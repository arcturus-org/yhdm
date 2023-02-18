<template>
  <v-row dense class="mt-4 ml-2">
    <v-col cols="9">
      <v-row dense class="mb-4">
        <div class="text-h5 mr-4">最新{{ title }}</div>
        <v-btn flat>更多</v-btn>
      </v-row>

      <v-row dense>
        <v-col v-for="item in n" :key="item.title" cols="4" md="2">
          <nx-card :content="item"></nx-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col>
      <v-row dense class="ml-4">
        <div class="text-h5 mr-4">最热{{ title }}</div>
        <v-btn flat>更多</v-btn>
      </v-row>

      <v-list class="d-flex flex-column flex-wrap" density="compact" rounded>
        <nx-list-item v-for="(item, index) in h" :key="index" :content="item">
        </nx-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from '#imports';
import { useStore } from '@stores';

const $store = useStore();

const props = defineProps<{
  type: 'japan' | 'china' | 'movies' | 'usa';
  title: string;
}>();

// latest
const n = computed(() => {
  switch (props.type) {
    case 'japan':
      return $store.home.latest_japanese_anime;
    case 'china':
      return $store.home.latest_chinese_anime;
    case 'usa':
      return $store.home.latest_american_anime;
    case 'movies':
      return $store.home.latest_anime_movie;
  }
});

// hottest
const h = computed(() => {
  switch (props.type) {
    case 'japan':
      return $store.home.hottest_japanese_anime;
    case 'china':
      return $store.home.hottest_chinese_anime;
    case 'usa':
      return $store.home.hottest_american_anime;
    case 'movies':
      return $store.home.hottest_anime_movie;
  }
});
</script>
