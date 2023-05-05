<template>
  <v-card :href="`/view/${content.id}`">
    <v-img :src="content.cover" class="align-end text-white image" :height="height ?? 200" cover>
      <div class="mask"></div>

      <div class="mx-2 status">{{ content.status }}</div>

      <v-chip color="secondary" variant="tonal" size="x-small" class="mb-2 mx-2">
        {{ content.score }}
      </v-chip>

      <v-chip color="red" variant="tonal" size="x-small" class="mb-2">
        {{ content.year }}
      </v-chip>
    </v-img>

    <v-card-item>
      <v-card-title style="font-size: 14px">{{ content.name }}</v-card-title>
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
      rgba(20, 20, 20, 0.8) 0,
      rgba(89, 89, 89, 0.6) 25%,
      rgba(191, 191, 191, 0.5) 50%,
      rgba(89, 89, 89, 0.6) 75%,
      rgba(20, 20, 20, 0.8) 100%
    );
  }

  .status {
    position: absolute;
    top: 5px;
    font-size: 12px;
  }
}
</style>
