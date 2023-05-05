<template>
  <v-row class="mt-2">
    <v-col cols="12" sm="8" md="9" class="d-flex flex-column">
      <v-row no-gutters class="mb-2 flex-grow-0">
        <div class="text-h5 mr-4">最新{{ title }}</div>
        <v-btn flat>更多</v-btn>
      </v-row>

      <v-row dense class="flex-grow-0">
        <v-col v-for="item in video.latest" :key="item.name" cols="4" md="2">
          <nx-card :content="item"></nx-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="d-none d-sm-block">
      <v-row no-gutters class="ml-4">
        <div class="text-h5 mr-4">最热{{ title }}</div>
        <v-btn flat>更多</v-btn>
      </v-row>

      <v-list class="d-flex flex-column flex-wrap" density="compact" nav>
        <nx-list-item v-for="(item, index) in video.hot" :key="index" :content="item" />
      </v-list>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps<{
  video: {
    latest: CList[];
    hot: HList[];
  };
  title: string;
}>();
</script>
