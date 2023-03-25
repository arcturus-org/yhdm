import { describe, expect, it } from 'vitest';
import { searchResolver } from '@server/resolver/search';
import { resolve } from 'path';
import fs from 'fs';

describe('player data', () => {
  it('should return PlayerRes', () => {
    const html = fs.readFileSync(resolve(__dirname, './index.html'), 'utf8');
    const res = searchResolver(html);

    expect(res.hot[0]).toEqual<VList>({
      id: '8480',
      status: '更新至12集',
      level: 1,
      color: '#dd2c00',
      name: '间谍过家家',
    });

    expect(res.search[0]).toEqual<CList>({
      actors: ['内详'],
      directors: ['内详'],
      cover: 'https://sakura.xonlines.com/upload/vod/20230117-1/3fc50a4d30ade24de88aa2f2b83e35e1.jpg',
      year: '1999',
      score: '7.5分',
      id: '189',
      name: '海贼王',
      status: '更新至1054集',
      tags: ['日本动漫', '日本', '1999'],
      brief: '《海贼王》讲述传奇海盗哥尔D罗杰在临死前曾留下关于其毕生的财富One Piece的消息，由此引得群雄...',
    });

    expect(res.page).toEqual({
      start: 1,
      end: 2,
      len: 2,
    });
  });
});
