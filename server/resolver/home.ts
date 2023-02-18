import { CheerioAPI, load } from 'cheerio';
import { levelColor, videoId } from '@utils';

const newResolver = function ($: CheerioAPI, e: any) {
  const div = $(e).children('li').children('div');

  const l: LA[] = [];

  div.each(function () {
    const el = $(this);

    const a = $(el).children('a');
    const div = $(el).children('div');

    l.push({
      cover: a.data('original') as string,
      title: a.attr('title')!,
      score: a.find('.tag').first().text(),
      year: a.find('.tag').last().text(),
      role: div.children('p').text().replace('主演：', ''),
      status: a.children('span').last().text(),
      id: videoId(a.attr('href')!),
    });
  });

  return l;
};

const hotResolver = function ($: CheerioAPI, e: any) {
  const a = $(e).children('li').children('a');

  const h: H[] = [];

  a.each(function (idx) {
    const el = $(this);

    h.push({
      level: idx + 1,
      status: $(el).children('span').first().text(),
      id: videoId(el.attr('href')!),
      name: el.attr('title')!,
      color: levelColor(idx),
    });
  });

  return h;
};

export const homeResolver = function (res: string): HomeRes {
  const $ = load(res);

  const week: WM = {};

  for (let i = 1; i <= 7; i++) {
    const day: W[] = [];

    const a = $(`#week${i} a`);

    a.each(function (idx) {
      const el = $(this);

      day.push({
        level: Number($(el).children('span').last().text()),
        status: $(el).children('span').first().text(),
        id: videoId(el.attr('href')!),
        name: el.attr('title')!,
        color: levelColor(idx),
      });
    });

    week[i] = day;
  }

  const l = $('.myui-vodlist.clearfix');

  const h = $('.myui-vodlist__text.active.clearfix');

  return {
    week,
    latest_japanese_anime: newResolver($, l[0]),
    hottest_japanese_anime: hotResolver($, h[0]),
    latest_chinese_anime: newResolver($, l[1]),
    hottest_chinese_anime: hotResolver($, h[1]),
    latest_anime_movie: newResolver($, l[2]),
    hottest_anime_movie: hotResolver($, h[2]),
    latest_american_anime: newResolver($, l[3]),
    hottest_american_anime: hotResolver($, h[3]),
  };
};
