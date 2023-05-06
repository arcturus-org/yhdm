<template>
  <div class="btn-wrapper">
    <v-btn icon="mdi-share" @click="share"></v-btn>
  </div>

  <v-snackbar v-model="snackbar"> 复制地址成功 </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from '#imports';
import { useClipboard } from '@vueuse/core';

const { copy } = useClipboard();

const snackbar = ref(false);

const share = () => {
  copy(window.location.href);
  snackbar.value = true;
};
</script>

<style lang="scss" scoped>
:deep(.v-snackbar__wrapper) {
  min-width: 120px;
}
</style>
