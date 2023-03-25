import { describe, expect, it } from 'vitest';
import { homeResolver } from '@server/resolver/home';
import { resolve } from 'path';
import fs from 'fs';

describe('home data', () => {
  it('should return homeRes', () => {
    const html = fs.readFileSync(resolve(__dirname, './index.html'), 'utf8');
    const res = homeResolver(html);

    expect(res.week[0][0]).toEqual<DList>({
      level: 1,
      status: '更新至37集',
      id: '9896',
      name: '斗罗大陆4终极斗罗',
      color: '#dd2c00',
    });

    expect(res.chinese.latest[0]).toEqual<CList>({
      cover: 'https://sakura.xonlines.com/upload/vod/20220723-1/d8670c05535b879072bf8be7469ca7a7.jpg',
      name: '神澜奇域无双珠',
      score: '6.4分',
      year: '2022',
      actors: ['边江', '史泽鲲', '张雨濛', '云惟一', '贺文潇'],
      status: '更新至27集',
      id: '9803',
    });
  });
});
