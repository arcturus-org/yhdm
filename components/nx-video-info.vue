<template>
  <v-row>
    <v-col cols="12">
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    </v-col>

    <v-col cols="12" sm="5" md="3">
      <v-card style="height: 100%">
        <v-img
          style="height: 100%"
          :src="video.cover"
          alt="anime cover"
          cover
        />
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" md="8">
      <div class="text-h4">{{ video.name }}</div>

      <div class="my-4">
        <v-chip :href="typeRoute" class="mr-2" color="green">
          {{ video.type.c }}
        </v-chip>

        <v-chip :href="typeRoute" class="mr-2" color="green">
          {{ video.region }}
        </v-chip>

        <v-chip color="green">{{ video.year }}</v-chip>
      </div>

      <div class="my-4 d-flex align-center">
        <v-icon icon="mdi-trending-up" color="#F4511E"></v-icon>

        <text class="ml-1">评分：</text>

        <v-rating
          v-model="rating"
          color="yellow-darken-3"
          active-color="yellow-darken-3"
          size="24"
        ></v-rating>

        <text class="mx-2 score">{{ video.rating.score }}</text>

        <text>{{ video.rating.ratewords }}</text>
      </div>

      <div class="my-4">
        <v-icon color="#039BE5" icon="mdi-update"></v-icon>

        <text class="ml-1"> 更新： {{ video.status }} </text>
      </div>

      <div class="my-4">
        <v-icon color="#009688" icon="mdi-calendar-month"></v-icon>

        <text class="ml-1"> 时间： {{ dateToString(video.updateTime!) }} </text>
      </div>

      <div class="my-4 d-flex align-center flex-wrap">
        <v-icon icon="mdi-account-multiple-outline" color="#2196F3"></v-icon>

        <text class="ml-1 mr-3">主演：</text>

        <v-chip
          color="#2196F3"
          density="comfortable"
          v-for="item in video.actors"
          :key="item"
          class="mr-2 my-1"
        >
          {{ item }}
        </v-chip>
      </div>

      <div class="my-4 d-flex align-center flex-wrap">
        <v-icon icon="mdi-account-edit " color="#FF9800"></v-icon>

        <text class="ml-1 mr-3">导演：</text>

        <v-chip
          color="#FF9800"
          density="comfortable"
          v-for="item in video.directors"
          :key="item"
          class="mr-2 my-1"
        >
          {{ item }}
        </v-chip>
      </div>
    </v-col>
  </v-row>

  <div class="my-8">
    <div class="text-h4 mb-4">剧情简介</div>

    <v-divider></v-divider>

    <div class="mt-4">{{ video.introduction }}</div>
  </div>

  <div class="my-8">
    <nx-playlist :playList="video.playList" :vid="video.id"></nx-playlist>
  </div>
</template>

<script setup lang="ts">
import { computed } from '#imports';
import { dateToString } from '@utils';

const props = defineProps<{
  video: VideoInfo;
}>();

const rating = computed(() => props.video.rating.star);

const typeRoute = computed(() => `/${props.video.type.r}`);

const breadcrumbs = computed(() => {
  return [
    {
      title: '首页',
      disabled: false,
      href: '/',
    },
    {
      title: props.video.type.c,
      disabled: false,
      href: `/${props.video.type.r}`,
    },
    {
      title: props.video.name,
      disabled: true,
    },
  ];
});
</script>

<style scoped lang="scss">
.score {
  font-size: 14px;
  color: #f9a825;
}
</style>
