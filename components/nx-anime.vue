<template>
  <v-row no-gutters class="mt-4 ml-2">
    <v-col cols="12" sm="8" md="9" class="d-flex flex-column">
      <v-row no-gutters class="mb-4 flex-grow-0">
        <div class="text-h5 mr-4">最新{{ title }}</div>
        <v-btn flat>更多</v-btn>
      </v-row>

      <v-row dense class="flex-grow-1">
        <v-col v-for="item in l" :key="item.name" cols="4" md="2">
          <nx-card :content="item"></nx-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="d-none d-sm-block">
      <v-row no-gutters class="ml-4">
        <div class="text-h5 mr-4">最热{{ title }}</div>
        <v-btn flat>更多</v-btn>
      </v-row>

      <v-list class="d-flex flex-column flex-wrap" density="compact" nav>
        <nx-list-item v-for="(item, index) in h" :key="index" :content="item" />
      </v-list>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from '#imports';
import { useStore } from '@stores';

const $store = useStore();

const props = defineProps<{
  type: vType;
  title: string;
}>();

const l = computed(() => {
  return $store.home[props.type].l;
});

const h = computed(() => {
  return $store.home[props.type].h;
});
</script>
