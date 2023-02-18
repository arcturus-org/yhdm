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
        <nx-list-item
          v-for="(item, idx) in $store.home.week[index + 1]"
          :key="idx"
          :content="item"
          style="width: 33%"
        >
        </nx-list-item>
      </v-list>
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
import { ref } from '#imports';
import { useStore } from '@stores';

const $store = useStore();

const tabs = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

const tab = ref(new Date().getDay() - 1);
</script>

<style lang="scss">
.tab {
  min-width: 60px !important;
}
</style>
