import { describe, expect, it } from 'vitest';
import { infoResolver } from '@server/resolver/info';
import { resolve } from 'path';
import fs from 'fs';

describe('video data', () => {
  it('should return ViewRes', () => {
    const html = fs.readFileSync(resolve(__dirname, './index.html'), 'utf8');
    const res = infoResolver(html);

    expect(res.hot[0]).toEqual<VList>({
      id: '7346',
      status: '更新至251话',
      level: 1,
      color: '#dd2c00',
      name: '斗罗大陆 第一季',
    });

    expect(res.like[0]).toEqual<CList>({
      actors: ['内详'],
      cover: 'http://sakura.xonlines.com/FileUpload/20181211123151670.jpg',
      year: '2018',
      score: '6.7分',
      id: '7346',
      name: '斗罗大陆 第一季',
      status: '更新至251话',
    });

    expect(res.video).toEqual<VideoInfo>({
      type: {
        c: '国产动漫',
        r: 'chinese',
      },
      id: '7346',
      name: '斗罗大陆 第一季',
      rating: {
        star: 4,
        score: 6.7,
        ratewords: '推荐',
      },
      status: '更新至251话',
      updateTime: '2023-03-18 17:25:16',
      cover: 'http://sakura.xonlines.com/FileUpload/20181211123151670.jpg',
      actors: ['未知'],
      directors: ['未知'],
      category: '国产动漫',
      region: '大陆',
      year: '2018',
      // prettier-ignore
      introduction: '《斗罗大陆 第一季》讲述唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却发现没有死，反而以另外一个身份来到了另一个世界，一个属于武魂的世界，名叫斗罗大陆。这里没有魔法，没有斗气，没有武术，却有神奇的武魂。这里的每个人，在自己六岁的时候，都会在武魂殿中令武魂觉醒。武魂有动物，有植物，有器物，武魂可以辅助人们的日常生活。而其中一些特别出色的武魂却可以用来修炼并进行战斗，这个职业，是斗罗大陆上最为强大也是最荣耀的职业魂师。 小小的唐三在圣魂村开始了他的魂师修炼之路，并萌生了振兴唐门的梦想。当唐门暗器来到斗罗大陆，当唐三武魂觉醒，他能否在这片武魂的世界再铸唐门的辉煌？',
      playList: [
        {
          source: '百度高清',
          set: 252,
        },
        {
          source: '百度高清',
          set: 252,
        },
        {
          source: 'm3u8高速',
          set: 252,
        },
      ],
    });
  });
});
