<template>
  <v-tabs v-model="tab" density="compact" color="#1E88E5">
    <v-tab v-for="(tab, idx) in tabs" :key="`tab-${idx}`" :value="idx" class="tab">
      {{ tab }}
    </v-tab>
  </v-tabs>

  <v-window v-model="tab">
    <v-window-item v-for="(t, i) in tabs" :key="t" :value="i" class="week-container">
      <v-list class="d-flex flex-column flex-wrap week-list" density="compact">
        <nx-list-item class="week-list-item" v-for="(item, idx) in week[i]" :key="idx" :content="item" />
      </v-list>
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
import { onMounted, ref } from '#imports';

defineProps<{ week: WList }>();

const tabs = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const tab = ref(-1);

onMounted(() => {
  tab.value = (new Date().getDay() + 6) % 7;
});
</script>

<style scoped lang="scss">
.tab {
  min-width: 36px !important;
}

:deep(.v-list) {
  padding: 0;
}

@media screen and (max-width: 600px) {
  :deep(.v-slide-group__content) {
    justify-content: space-between;
  }
}

@media screen and (min-width: 600px) {
  .week-container {
    height: 232px;

    .week-list {
      height: inherit;
    }

    .week-list-item {
      width: 33.3%;
    }
  }
}
</style>
