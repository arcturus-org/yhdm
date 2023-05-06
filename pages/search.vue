<template>
  <Head>
    <Title>{{ $route.query.key }}の搜索结果</Title>
  </Head>

  <nx-navbar current="/search" />

  <div class="pa-4">
    <div class="mb-2 ml-2">
      &quot;
      <span style="color: red">{{ $route.query.key }}</span>
      &quot; 的搜索结果:
    </div>

    <v-row dense>
      <v-col cols="12" sm="8" md="9">
        <div v-if="data!.page.start !== 0" class="mb-4 d-flex flex-wrap">
          <div v-for="item in data!.search" :key="item.id" class="search-card">
            <nx-search-card :video="item" />
          </div>
        </div>

        <div v-else>
          <v-img src="/assets/figures/notFound.svg" alt="not found" />
        </div>

        <v-pagination
          v-show="data!.page.start !== 0"
          :start="data!.page.start"
          :end="data!.page.end"
          :length="data!.page.len"
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
          <nx-list-item v-for="(item, index) in data!.hot" :key="index" :content="item" />
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter, ref, useFetch, watch } from '#imports';

const $route = useRoute();
const $router = useRouter();

const page = ref(Number($route.query.page ?? 1));

const { data } = await useFetch<SearchRes>(`/api/search?key=${$route.query.key}&page=${page.value}`);

watch(
  () => $route.query,
  async () => {
    const res = await $fetch<SearchRes>(`/api/search/only?key=${$route.query.key}&page=${page.value}`);
    data.value!.page = res.page;
    data.value!.search = res.search;
  }
);

function update(p: number) {
  $router.push({
    path: '/search',
    query: {
      key: $route.query.key,
      page: p,
    },
  });
}
</script>

<style scoped lang="scss">
@media screen and (min-width: 600px) {
  .search-card {
    width: 20%;
  }
}
.search-card {
  padding: 4px;
}
</style>
