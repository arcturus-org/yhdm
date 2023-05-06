<template>
  <div class="playlist-wrapper">
    <v-tabs v-model="tab" density="compact" color="#1E88E5" class="tabs">
      <v-tab v-for="(item, index) in playList" :key="item.source" :value="index">
        {{ item.source }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab" class="mt-2 pa-2">
      <v-window-item v-for="(item, index) in playList" :key="item.source" :value="index">
        <div class="grid">
          <v-btn
            v-for="i in item.set"
            variant="tonal"
            :color="current === `${i}` && src === `${index}` ? '#FF9800' : '#2196F3'"
            @click="() => toPlayer(index, i)"
          >
            {{ padZero(i) }}
          </v-btn>
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">
import { ref, useRouter } from '#imports';
import { padZero } from '@utils/date';

const props = defineProps<{
  playList: PlayList[];
  vid: string;
  current?: string;
  src?: string;
}>();

const $router = useRouter();

const tab = ref(Number(props.src) ?? 0);

const toPlayer = (src: number, vol: number) => {
  $router.push({
    path: `/player/${props.vid}`,
    query: { src, vol },
  });
};
</script>

<style scoped lang="scss">
.playlist-wrapper {
  padding: 6px;
  background-color: #fafafa;
  border-radius: 6px;

  .tabs {
    margin-left: 8px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
}
</style>
