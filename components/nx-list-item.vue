<template>
  <v-list-item :value="content">
    <template v-slot:prepend>
      <v-chip class="ma-2" size="x-small" :color="content.color">
        {{ content.level }}
      </v-chip>
    </template>

    <v-list-item-title>
      <v-row no-gutters>
        <v-col :cols="7" class="text-truncate">{{ content.name }}</v-col>
        <v-col :cols="5" class="text-right text-truncate">{{ content.status }}</v-col>
      </v-row>
    </v-list-item-title>
  </v-list-item>
</template>

<script setup lang="ts">
defineProps<{
  content: L;
}>();
</script>
