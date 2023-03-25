import { describe, expect, it } from 'vitest';
import { playerResolver } from '@server/resolver/player';
import { resolve } from 'path';
import fs from 'fs';

describe('player data', () => {
  it('should return PlayerRes', () => {
    const html = fs.readFileSync(resolve(__dirname, './index.html'), 'utf8');
    const res = playerResolver(html);

    expect(res.like[0]).toEqual<CList>({
      actors: ['内详'],
      cover: 'http://sakura.xonlines.com/FileUpload/4371.jpg',
      year: '2016',
      score: '7.6分',
      id: '2489',
      name: '进击的巨人第二季',
      status: '12全集',
    });

    expect(res.video).toEqual<PlayerVideoInfo>({
      url: 'https://new.qoqkkhy.com/20230107/tACZsdqB/index.m3u8',
      nextUrl: 'https://new.qoqkkhy.com/20230120/nGPGcifM/index.m3u8',
      name: 'Love Live！虹咲学园学园偶像同好会四格漫',
      year: '2023',
      updateTime: '2023-03-25更新',
      id: '10165',
      type: '日本动漫',
      region: '日本',
      score: '9.3分',
      playList: [
        {
          source: '无尽高速',
          set: 12,
        },
        {
          source: '百度高清',
          set: 12,
        },
        {
          source: '百度高清',
          set: 12,
        },
      ],
      like: 157,
      negative: 604,
    });
  });
});
