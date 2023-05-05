<template>
  <v-card :href="`view/${video.id}`" class="pa-2 my-2">
    <nx-image :url="video.cover" :status="video.status" :score="video.score" :year="video.year" />

    <v-card-title>{{ video.name }} </v-card-title>

    <!-- <v-row>
      <v-col cols="12" sm="5" md="2"> </v-col>

      <v-col cols="12" sm="6" md="10" class="d-flex flex-column justify-space-between">
        <div class="text-h4">{{ video.name }}</div>

        <div class="my-2 d-flex align-center flex-wrap">
          <v-icon icon="mdi-account-multiple-outline" color="#2196F3"></v-icon>

          <text class="ml-1 mr-3">主演：</text>

          <v-chip color="#2196F3" density="comfortable" v-for="actor in video.actors" :key="actor" class="mr-2 my-1">
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
          <v-chip class="mr-2" color="green" v-for="(tag, idx) in video.tags" :key="idx">
            {{ tag }}
          </v-chip>
        </div>
      </v-col>
    </v-row> -->
  </v-card>
</template>

<script setup lang="ts">
defineProps<{ video: CList }>();
</script>
