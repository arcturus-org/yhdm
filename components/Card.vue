<template>
  <v-card :elevation="0" hover>
    <v-img class="align-end text-white image" height="240" :src="cover" cover>
      <div class="mask"></div>

      <div class="mx-2 status">{{ status }}</div>

      <v-chip
        color="secondary"
        variant="tonal"
        size="x-small"
        class="mb-2 mx-2"
      >
        {{ score }}
      </v-chip>

      <v-chip color="red" variant="tonal" size="x-small" class="mb-2">
        {{ year }}
      </v-chip>
    </v-img>

    <v-card-item>
      <v-card-title style="font-size: 15px">{{ title }}</v-card-title>
      <v-card-subtitle> 主演: {{ role }} </v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  role: string;
  cover: string;
  year: string;
  score: string;
  url: string;
  status: string;
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
      rgba(0, 0, 0, 0.5) 0%,
      rgba(255, 255, 255, 0) 30%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  .status {
    position: absolute;
    top: 0;
  }
}
</style>
