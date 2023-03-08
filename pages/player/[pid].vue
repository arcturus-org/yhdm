<template>
  <Head>
    <Title>{{ $store.player.video.name }}</Title>
  </Head>

  <div v-if="loading" class="loading">
    <v-progress-circular indeterminate color="#1E88E5" />
  </div>

  <div v-else class="pb-4 wrapper">
    <div ref="video" :style="{ aspectRatio: '16/9' }">
      <!-- video player -->
    </div>

    <div class="text-h4 my-4">{{ $store.player.video.name }}</div>

    <div class="d-flex align-center flex-wrap">
      <v-chip class="mr-2 my-1" color="blue">
        {{ $store.player.video.updateTime }}
      </v-chip>

      <v-chip class="mr-2 my-1" color="red">
        {{ $store.player.video.score }}
      </v-chip>

      <v-chip class="mr-2 my-1" color="green">
        {{ $store.player.video.type }}
      </v-chip>

      <v-chip class="mr-2 my-1" color="green">
        {{ $store.player.video.region }}
      </v-chip>

      <v-chip class="mr-2 my-1" color="pink">
        {{ $store.player.video.year }}
      </v-chip>
    </div>

    <div class="my-8">
      <nx-playlist
        :playList="$store.player.video.playList"
        :vid="$store.player.video.id"
        :current="curVideo"
        :src="curSrc"
      />
    </div>

    <div class="text-h4 my-4">猜你喜欢</div>

    <v-divider></v-divider>

    <v-row dense class="mt-4">
      <v-col
        v-for="item in $store.player.like"
        :key="item.name"
        cols="4"
        md="2"
      >
        <nx-card :content="item" :height="180"></nx-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, onMounted, useRoute, ref, nextTick } from '#imports';
import { useStore } from '@stores';
import { storeToRefs } from 'pinia';
import Artplayer from 'artplayer';
// @ts-ignore
import Hls from 'hls.js/dist/hls.min';
import artplayerPluginHlsQuality from 'artplayer-plugin-hls-quality';
import { log } from '@utils';

definePageMeta({
  layout: 'detail',
});

function playM3u8(video: HTMLMediaElement, url: string, art: Artplayer) {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);

    // @ts-ignore
    art.hls = hls;
    art.once('url', () => hls.destroy());
    art.once('destroy', () => hls.destroy());
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
  } else {
    art.notice.show = 'Unsupported playback format: m3u8';
  }
}

const video = ref<HTMLDivElement>();

const $route = useRoute();
const $store = useStore();

const { loading } = storeToRefs($store);

const curVideo = ref(0);
const curSrc = ref(0);

onMounted(() => {
  const v = ($route.params.pid as string).split('-');

  curSrc.value = Number(v[1]);
  curVideo.value = Number(v[2]);

  $store.playerInfo($route.params.pid as string).then(() => {
    nextTick(() => {
      new Artplayer(
        {
          container: video.value!,
          url: $store.player.video.url,
          type: 'm3u8',
          title: $store.player.video.name,
          autoMini: true,
          flip: true,
          playbackRate: true,
          screenshot: true,
          setting: true,
          pip: true,
          fullscreen: true,
          fullscreenWeb: true,
          customType: {
            m3u8: playM3u8,
          },
          plugins: [
            artplayerPluginHlsQuality({
              control: true,
              setting: true,
              // @ts-ignore
              getResolution: (level) => level.height + 'P',
              auto: 'Auto',
            }),
          ],
        },
        function onReady() {
          log(this);
          this.play();
        }
      );
    });
  });
});
</script>

<style lang="scss">
.wrapper {
  padding: 12px 24px;

  @media screen and (min-width: 800px) {
    padding: 0 150px;
  }
}
</style>
