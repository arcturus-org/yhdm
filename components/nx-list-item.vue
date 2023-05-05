<template>
  <v-list-item class="list-item" :value="content" nav :href="`/view/${content.id}`">
    <template v-slot:prepend>
      <v-chip class="rank" :color="content.color">
        {{ content.level }}
      </v-chip>
    </template>

    <v-list-item-title>
      <v-row dense>
        <v-col :cols="7" class="text-truncate">{{ content.name }}</v-col>
        <v-col :cols="5" class="text-right text-truncate">
          {{ content.status }}
        </v-col>
      </v-row>
    </v-list-item-title>
  </v-list-item>
</template>

<script setup lang="ts">
defineProps<{ content: VList }>();
</script>

<style lang="scss">
.list-item {
  min-height: 34px !important;

  .rank {
    margin: 0;
    margin-right: 4px;
    height: 20px !important;
    width: 20px !important;
    padding: 0 !important;
    justify-content: center;
    font-size: 10px !important;
  }
}
</style>
