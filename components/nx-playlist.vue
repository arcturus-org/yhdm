<template>
  <div class="playlist-wrapper">
    <v-tabs v-model="tab" density="compact" color="#1E88E5" class="tabs">
      <v-tab v-for="(item, index) in playList" :key="item.source" :value="index">
        {{ item.source }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab" class="mt-2 pa-2 playlist" :style="{ height }">
      <v-window-item v-for="(item, index) in playList" :key="item.source" :value="index">
        <div class="grid" :style="{ gridTemplateColumns: `repeat(${col ?? 10}, 1fr)` }">
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
import { onMounted, ref, useRouter } from '#imports';
import { padZero } from '@utils/date';

const props = defineProps<{
  playList: PlayList[];
  vid: string;
  current?: string;
  src?: string;
  height?: string;
  col?: number;
}>();

const $router = useRouter();

const tab = ref(-1);

onMounted(() => {
  tab.value = Number(props.src ?? 0);
});

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

  .playlist {
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.grid {
  display: grid;
  gap: 12px;
}
</style>
