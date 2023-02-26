<template>
  <v-layout full-height>
    <v-app-bar :elevation="0" class="w-100" density="compact">
      <template v-slot:prepend>
        <v-btn icon="mdi-arrow-left" @click="() => $router.back()"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts"></script>
