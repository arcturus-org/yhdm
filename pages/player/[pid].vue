<template>
  <nx-navbar :current="`/${data!.video.type.r}`" />

  <Head>
    <Title>{{ data!.video.name }}</Title>
  </Head>

  <div class="wrapper">
    <v-row class="mt-4">
      <v-col md="8" class="video-wrapper">
        <div ref="video" :style="{ aspectRatio: '16/9' }"></div>

        <div class="text-h6 my-2">{{ data!.video.name }}</div>

        <div class="d-flex align-center flex-wrap">
          <v-chip class="mr-2 my-1" color="blue">
            {{ data!.video.updateTime }}
          </v-chip>

          <v-chip class="mr-2 my-1" color="red">
            {{ data!.video.score }}
          </v-chip>

          <v-chip class="mr-2 my-1" color="green">
            {{ data!.video.type.c }}
          </v-chip>

          <v-chip class="mr-2 my-1" color="green">
            {{ data!.video.region }}
          </v-chip>

          <v-chip class="mr-2 my-1" color="pink">
            {{ data!.video.year }}
          </v-chip>
        </div>
      </v-col>
      <v-col md="4">
        <nx-playlist
          :playList="data!.video.playList"
          :vid="data!.video.id"
          :current="$route.query.vol"
          :src="$route.query.src"
          height="360px"
          :col="3"
        />
      </v-col>
    </v-row>

    <div class="text-h6 my-2">猜你喜欢</div>

    <v-row dense>
      <v-col v-for="item in data!.like" :key="item.name" cols="4" md="2">
        <nx-card :content="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useFetch, useRoute, ref, watch, onMounted } from '#imports';

import Artplayer from 'artplayer';
import { type Option } from 'artplayer/types/option';

import Hls from 'hls.js/dist/hls.min';
import artplayerPluginHlsQuality from 'artplayer-plugin-hls-quality';

const video = ref<HTMLDivElement>();

const art = ref<Artplayer>();

const $route = useRoute();

const { data } = await useFetch<PlayerRes>(
  `/api/player?vid=${$route.params.pid}&src=${$route.query.src}&episode=${$route.query.vol}`
);

function playM3u8(video: HTMLMediaElement, url: string, art: Artplayer) {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);

    // @ts-ignore
    art.hls = hls;
    art.once('destroy', () => hls.destroy());
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
  } else {
    art.notice.show = 'Unsupported playback format: m3u8';
  }
}

onMounted(() => {
  const options: Option = {
    container: video.value!,
    url: data.value!.video.url,
    type: 'm3u8',
    autoMini: true,
    flip: true,
    playbackRate: true,
    screenshot: true,
    setting: true,
    pip: true,
    fullscreen: true,
    fullscreenWeb: true,
    customType: { m3u8: playM3u8 },
    plugins: [
      artplayerPluginHlsQuality({
        getResolution: (level) => level.height + 'P',
        control: true,
        setting: true,
        auto: 'Auto',
      }),
    ],
  };

  art.value = new Artplayer(options);
});

watch(
  () => $route.query,
  async () => {
    const src = $route.query.src;
    const vol = $route.query.vol;
    const pid = `${$route.params.pid}-${src}-${vol}`;

    const res = await $fetch<PlayerRes>(`/api/player?vid=${pid}&src=${src}&episode=${vol}`);

    art.value!.switchUrl(res.video.url);
  }
);
</script>

<style lang="scss" scope>
.wrapper {
  padding: 0 20px 20px;

  @media screen and (min-width: 600px) {
    padding: 0 80px 20px;
  }

  @media screen and (min-width: 900px) {
    padding: 0 150px 20px;
  }
}
</style>
