<template>
  <v-card :href="`view/${video.id}`" class="pa-4 my-4">
    <v-row>
      <v-col cols="12" sm="5" md="2">
        <v-img
          style="height: 100%"
          :src="video.cover"
          alt="anime cover"
          cover
          class="align-end text-white image"
        >
          <div class="mask"></div>

          <div class="mx-2 status">{{ video.status }}</div>

          <v-chip
            color="secondary"
            variant="tonal"
            size="x-small"
            class="mb-2 mx-2"
          >
            {{ video.score }}
          </v-chip>

          <v-chip color="red" variant="tonal" size="x-small" class="mb-2">
            {{ video.year }}
          </v-chip>
        </v-img>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="10"
        class="d-flex flex-column justify-space-between"
      >
        <div class="text-h4">{{ video.name }}</div>

        <div class="my-2 d-flex align-center flex-wrap">
          <v-icon icon="mdi-account-multiple-outline" color="#2196F3"></v-icon>

          <text class="ml-1 mr-3">主演：</text>

          <v-chip
            color="#2196F3"
            density="comfortable"
            v-for="actor in video.actors"
            :key="actor"
            class="mr-2 my-1"
          >
            {{ actor }}
          </v-chip>
        </div>

        <div class="my-2 d-flex align-center flex-wrap">
          <v-icon icon="mdi-account-edit " color="#FF9800"></v-icon>

          <text class="ml-1 mr-3">导演：</text>

          <v-chip
            color="#FF9800"
            density="comfortable"
            v-for="director in video.directors"
            :key="director"
            class="mr-2 my-1"
          >
            {{ director }}
          </v-chip>
        </div>

        <div class="my-2">
          <v-icon icon="mdi-text-search" color="#90A4AE"></v-icon>

          <text class="ml-1 mr-3">简介：</text>

          <text>{{ video.brief }}</text>
        </div>

        <div class="mt-2">
          <v-chip
            class="mr-2"
            color="green"
            v-for="(tag, idx) in video.tags"
            :key="idx"
          >
            {{ tag }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  video: CList;
}>();
</script>

<style lang="scss" scoped>
.image {
  position: relative;
  border-radius: 6px;

  .mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  .status {
    position: absolute;
    top: 0;
  }
}
</style>
