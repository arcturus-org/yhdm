<template>
  <v-app full-height id="inspire">
    <navbar />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import navbar from '@components/nx-navbar.vue';
</script>
