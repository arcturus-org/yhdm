<template>
  <div v-if="loading" class="loading">
    <v-progress-circular indeterminate color="#1E88E5" />
  </div>

  <div v-else class="px-12 pa-4">
    <div>
      "<span style="color: red">{{ $route.query.key }}</span
      >" 的搜索结果:
    </div>

    <v-row>
      <v-col cols="12" sm="8" md="9">
        <!-- search result -->
        <nx-search-card
          v-for="item in $store.search.search"
          :key="item.id"
          :video="item"
        />

        <v-pagination
          :start="$store.search.page.start"
          :end="$store.search.page.end"
          :length="$store.search.page.len"
          v-model="page"
          density="compact"
          @update:modelValue="update"
        />
      </v-col>

      <v-col cols="12" sm="4" md="3">
        <v-row no-gutters class="ml-4">
          <div class="text-h5 mr-4">热播</div>
          <v-btn flat>更多</v-btn>
        </v-row>

        <v-list class="d-flex flex-column flex-wrap" density="compact" nav>
          <nx-list-item
            v-for="(item, index) in $store.search.hot"
            :key="index"
            :content="item"
          />
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@stores';
import { storeToRefs } from 'pinia';
import {
  onMounted,
  useRoute,
  useRouter,
  ref,
  watchEffect,
  toRef,
} from '#imports';

const $store = useStore();
const $route = useRoute();
const $router = useRouter();

const { loading } = storeToRefs($store);

const page = ref(Number($route.query.page ?? 1));

onMounted(() => {
  $store.searchInfo($route.query.key as string);

  watchEffect(() =>
    $store.searchInfo(($route.query.key as string) ?? '', page.value, false)
  );
});

function update(p: number) {
  console.log(11);
  $router.push({
    path: '/search',
    query: {
      key: $route.query.key,
      page: p,
    },
  });
}
</script>
