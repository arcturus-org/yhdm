<template>
  <v-card :href="`view/${video.id}`" class="pa-2" style="height: 100%">
    <nx-image :url="video.cover" :status="video.status" :score="video.score" :year="video.year" />

    <v-card-title>{{ video.name }} </v-card-title>

    <v-card-text> {{ video.brief }}</v-card-text>

    <v-chip
      size="x-small"
      class="mr-1 mt-1 justify-center chip"
      color="green"
      v-for="(tag, idx) in video.tags"
      :key="idx"
    >
      {{ tag }}
    </v-chip>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{ video: CList }>();
</script>

<style scoped lang="scss">
:deep(.v-card-title) {
  padding: 0.5rem 0 0 0.25rem;
  font-weight: bold;
  font-size: 16px;
}

:deep(.v-card-text) {
  padding: 0.5rem 0;
  height: 120px;
}

.chip {
  width: 30%;
}
</style>
