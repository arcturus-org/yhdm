<template>
  <Head>
    <Title>{{ data!.video.name }}</Title>
  </Head>

  <nx-navbar :current="`/${data!.video.type.r}`" />
  <v-row class="px-12 py-4">
    <v-col md="9">
      <nx-video-info :video="data!.video"></nx-video-info>

      <div class="text-h4 my-4">猜你喜欢</div>

      <v-divider></v-divider>

      <v-row dense class="mt-4">
        <v-col v-for="item in data!.like" :key="item.name" cols="4" md="2">
          <nx-card :content="item"></nx-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="d-none d-md-block">
      <v-row no-gutters class="ml-4">
        <div class="text-h5 mr-4">{{ data!.video.type.c }}热播</div>
        <v-btn flat>更多</v-btn>
      </v-row>

      <v-list class="d-flex flex-column flex-wrap" density="compact" nav>
        <nx-list-item v-for="(item, index) in data!.hot" :key="index" :content="item" />
      </v-list>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useFetch, useRoute } from '#imports';

const $route = useRoute();

const { data } = useFetch<ViewRes>(`/api/info?vid=${$route.params.vid}`);
</script>
