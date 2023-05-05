<template>
  <v-app full-height id="inspire">
    <slot name="navbar" />
    <v-main style="padding-top: 56px">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>
