<template>
  <div class="d-md-flex">
    <div class="text-h4 mr-md-4 mb-md-0 mb-2">播放地址</div>

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
        <v-btn
          v-for="i in item.set"
          variant="tonal"
          :color="
            current === `${i}` && src === `${index}` ? '#FF9800' : '#2196F3'
          "
          @click="() => toPlayer(index, i)"
        >
          {{ padZero(i) }}
        </v-btn>
      </div>
    </v-window-item>
  </v-window>
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
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
}
</style>
