<template>
  <v-tabs v-model="tab" align-tabs="start" density="compact" color="#1E88E5">
    <v-tab v-for="(item, index) in tabs" :key="item" :value="index" class="tab">
      {{ item }}
    </v-tab>
  </v-tabs>

  <v-window v-model="tab">
    <v-window-item v-for="(item, index) in tabs" :key="item" :value="index">
      <v-list
        density="compact"
        rounded
        class="d-flex flex-column flex-wrap"
        style="height: 280px"
      >
        <v-list-item
          v-for="(i, j) in weeks[index + 1]"
          :key="j"
          :value="i"
          style="width: 33%"
        >
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
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
import { ref } from '#imports';
import { storeToRefs } from 'pinia';
import { useStore } from '@stores';

const $store = useStore();

const tabs = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

const tab = ref(new Date().getDay() - 1);

const { weeks } = storeToRefs($store);
</script>

<style lang="scss">
.tab {
  min-width: 60px !important;
}
</style>
