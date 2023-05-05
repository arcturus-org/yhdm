<template>
  <v-card :href="`/view/${content.id}`">
    <nx-image :url="content.cover" :status="content.status" :score="content.score" :year="content.year"></nx-image>

    <v-card-item>
      <v-card-title style="font-size: 14px">{{ content.name }}</v-card-title>
      <v-card-subtitle> 主演: {{ content.actors.join(',') }} </v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{ content: CList }>();
</script>
