<template>
  <v-tabs v-model="tab" align-tabs="start" density="compact" color="#1E88E5">
    <v-tab v-for="(item, index) in tabs" :key="item" :value="index" class="tab">
      {{ item }}
    </v-tab>
  </v-tabs>

  <v-window v-model="tab">
    <v-window-item v-for="(item, index) in tabs" :key="item" :value="index">
      <v-list class="d-flex flex-column flex-wrap week-list" density="compact">
        <nx-list-item
          class="week-list-item"
          v-for="(item, idx) in $store.home.week[index]"
          :key="idx"
          :content="item"
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

const tab = ref((new Date().getDay() + 6) % 7);
</script>

<style scoped lang="scss">
.tab {
  min-width: 36px !important;
}

@media screen and (max-width: 600px) {
  :deep(.v-slide-group__content) {
    justify-content: space-between;
  }
}

@media screen and (min-width: 600px) {
  .week-list {
    height: 320px;

    .week-list-item {
      width: 33.3%;
    }
  }
}
</style>
