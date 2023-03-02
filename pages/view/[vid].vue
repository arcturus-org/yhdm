<template>
  <Head>
    <Title>{{ $store.detail.video.name }}</Title>
  </Head>

  <div v-if="loading" class="loading">
    <v-progress-circular indeterminate color="#1E88E5" />
  </div>

  <div v-else class="px-12 pb-4">
    <v-row>
      <v-col md="9">
        <nx-video-info :video="$store.detail.video"></nx-video-info>

        <div>
          <div class="text-h4 my-4">猜你喜欢</div>

          <v-divider></v-divider>

          <v-row dense class="mt-4">
            <v-col
              v-for="item in $store.detail.like"
              :key="item.name"
              cols="4"
              md="2"
            >
              <nx-card :content="item" :height="180"></nx-card>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col class="d-none d-md-block">
        <v-row no-gutters class="ml-4">
          <div class="text-h5 mr-4">{{ $store.detail.video.type.c }}热播</div>
          <v-btn flat>更多</v-btn>
        </v-row>

        <v-list class="d-flex flex-column flex-wrap" density="compact" nav>
          <nx-list-item
            v-for="(item, index) in $store.detail.hot"
            :key="index"
            :content="item"
          />
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, onMounted, useRoute } from '#imports';
import { storeToRefs } from 'pinia';
import { useStore } from '@stores';

definePageMeta({
  layout: 'detail',
});

const $route = useRoute();
const $store = useStore();

const { loading } = storeToRefs($store);

onMounted(() => {
  $store.detailInfo($route.params.vid as string);
});
</script>
