<template>
  <v-card :elevation="0" hover :href="`/view/${content.id}`">
    <v-img
      :src="content.cover"
      class="align-end text-white image"
      :height="height ?? 240"
      cover
    >
      <div class="mask"></div>

      <div class="mx-2 status">{{ content.status }}</div>

      <v-chip
        color="secondary"
        variant="tonal"
        size="x-small"
        class="mb-2 mx-2"
      >
        {{ content.score }}
      </v-chip>

      <v-chip color="red" variant="tonal" size="x-small" class="mb-2">
        {{ content.year }}
      </v-chip>
    </v-img>

    <v-card-item>
      <v-card-title :style="{ fontSize: 15 }">{{ content.name }}</v-card-title>
      <v-card-subtitle> 主演: {{ content.actors.join(',') }} </v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  content: CList;
  height?: number;
}>();
</script>

<style scoped lang="scss">
.image {
  position: relative;

  .mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  .status {
    position: absolute;
    top: 0;
  }
}
</style>
