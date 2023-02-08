<template>
  <v-row dense class="mt-4 ml-2">
    <v-col cols="9">
      <v-row dense class="mb-4">
        <div class="text-h5 mr-4">最新{{ props.title }}</div>
        <v-btn flat>更多</v-btn>
      </v-row>

      <v-row dense>
        <v-col v-for="item in n.value" :key="item.title" cols="4" md="2">
          <Card
            :key="item.title"
            :title="item.title"
            :role="item.role"
            :cover="item.cover"
            :year="item.year"
            :score="item.score"
            :url="item.url"
            :status="item.status"
          ></Card>
        </v-col>
      </v-row>
    </v-col>

    <v-col>
      <v-row dense class="ml-4">
        <div class="text-h5 mr-4">最热{{ props.title }}</div>
        <v-btn flat>更多</v-btn>
      </v-row>

      <v-list density="compact" rounded class="d-flex flex-column flex-wrap">
        <v-list-item v-for="(i, j) in h.value" :key="j" :value="i">
          <template v-slot:prepend>
            <v-chip class="ma-2" size="x-small" :color="i.color">
              {{ i.level }}
            </v-chip>
          </template>

          <v-list-item-title v-text="i.name"></v-list-item-title>

          <template v-slot:append>
            <div>{{ i.status }}</div>
          </template>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from '#imports';
import { storeToRefs } from 'pinia';
import { useStore } from '@stores';

const $store = useStore();

const props = defineProps<{
  type: 'japan' | 'china' | 'movies' | 'usa';
  title: string;
}>();

const s = storeToRefs($store);

const n = computed(() => {
  if (props.type === 'japan') {
    return s.jnew;
  } else if (props.type === 'china') {
    return s.cnew;
  } else if (props.type === 'usa') {
    return s.unew;
  } else {
    return s.mnew;
  }
});

const h = computed(() => {
  if (props.type === 'japan') {
    return s.jhot;
  } else if (props.type === 'china') {
    return s.chot;
  } else if (props.type === 'usa') {
    return s.uhot;
  } else {
    return s.mhot;
  }
});
</script>
