<template>
  <div class="d-flex">
    <div class="text-h4 mr-4">播放地址</div>
    <v-tabs v-model="tab" align-tabs="start" density="compact" color="#1E88E5">
      <v-tab
        v-for="(item, index) in playList"
        :key="item.source"
        :value="index"
      >
        {{ item.source }}
      </v-tab>
    </v-tabs>
  </div>

  <v-window v-model="tab" class="mt-4 pa-2">
    <v-window-item
      v-for="(item, index) in playList"
      :key="item.source"
      :value="index"
    >
      <div class="grid">
        <v-btn v-for="i in item.set" variant="tonal" color="#2196F3">
          {{ padZero(i) }}
        </v-btn>
      </div>
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
import { ref } from '#imports';
import { padZero } from '@utils';

defineProps<{
  playList: PlayList[];
}>();

const tab = ref(0);
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 12px;
}
</style>
