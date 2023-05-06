<template>
  <v-row>
    <v-col cols="12" class="breadcrumbs-wrapper">
      <v-breadcrumbs class="breadcrumbs" :items="breadcrumbs" density="compact" />
    </v-col>

    <v-col cols="12" sm="4" md="3">
      <v-card class="image-wrapper">
        <v-img class="image" :src="video.cover" alt="anime cover" cover>
          <div class="mask"></div>
        </v-img>
      </v-card>
    </v-col>

    <v-col cols="12" sm="8" md="9">
      <div class="text-h6">{{ video.name }}</div>

      <div class="my-2">
        <v-chip density="comfortable" :href="typeRoute" class="mr-2" color="green">
          {{ video.type.c }}
        </v-chip>

        <v-chip density="comfortable" :href="typeRoute" class="mr-2" color="green">
          {{ video.region }}
        </v-chip>

        <v-chip density="comfortable" color="green">{{ video.year }}</v-chip>
      </div>

      <div class="my-2 d-flex align-center">
        <v-icon icon="mdi-trending-up" color="#F4511E"></v-icon>

        <text class="ml-1"> 评分：</text>

        <v-rating v-model="rating" color="yellow-darken-3" active-color="yellow-darken-3" size="24"></v-rating>

        <text class="mx-2 score">{{ video.rating.score }}</text>

        <text>{{ video.rating.ratewords }}</text>
      </div>

      <div class="my-2">
        <v-icon color="#039BE5" icon="mdi-update"></v-icon>

        <text class="ml-1">更新： {{ video.status }} </text>
      </div>

      <div class="my-2">
        <v-icon color="#009688" icon="mdi-calendar-month"></v-icon>

        <text class="ml-1">时间： {{ dateToString(video.updateTime!) }} </text>
      </div>

      <div class="my-2 d-flex">
        <div class="d-flex align-start flex-shrink-0 roles-wrapper">
          <v-icon icon="mdi-account-multiple-outline" color="#2196F3"></v-icon>
          <text class="ml-1">主演：</text>
        </div>

        <div class="d-flex flex-wrap">
          <v-chip color="#2196F3" density="comfortable" v-for="item in video.actors" :key="item" class="mr-2 my-1">
            {{ item }}
          </v-chip>
        </div>
      </div>

      <div class="my-2 d-flex">
        <div class="d-flex align-start flex-shrink-0 roles-wrapper">
          <v-icon icon="mdi-account-edit " color="#FF9800"></v-icon>
          <text class="ml-1">导演：</text>
        </div>

        <div class="d-flex flex-wrap">
          <v-chip color="#FF9800" density="comfortable" v-for="item in video.directors" :key="item" class="mr-2 my-1">
            {{ item }}
          </v-chip>
        </div>
      </div>

      <nx-share />
    </v-col>
  </v-row>

  <div class="my-8">
    <div class="text-h6 mb-2">剧情简介</div>

    <div>{{ video.introduction }}</div>
  </div>

  <div class="my-8">
    <div class="text-h6 mb-2">播放地址</div>

    <nx-playlist :playList="video.playList" :vid="video.id" />
  </div>
</template>

<script setup lang="ts">
import { computed } from '#imports';
import { dateToString } from '@utils/date';

const props = defineProps<{ video: VideoInfo }>();

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

.breadcrumbs-wrapper {
  padding: 0;

  .breadcrumbs {
    font-size: 14px;
  }
}

.roles-wrapper {
  width: 80px;
  line-height: 32px;

  :deep(.v-icon) {
    height: 32px;
  }
}

.image-wrapper {
  $mh: 300px;

  min-height: $mh;

  .image {
    min-height: $mh;
    position: relative;

    .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(20, 20, 20, 0.5) 0,
        rgba(89, 89, 89, 0.3) 20%,
        rgba(191, 191, 191, 0.2) 50%,
        rgba(89, 89, 89, 0.3) 80%,
        rgba(20, 20, 20, 0.5) 100%
      );
    }
  }
}
</style>
