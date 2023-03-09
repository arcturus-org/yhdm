import { CheerioAPI, load } from 'cheerio';
import { getActors, levelColor, videoId } from '@utils';

const _l = ($: CheerioAPI, e: any) => {
  const div = $(e).children('li').children('div');

  const l: CList[] = [];

  div.each(function () {
    const el = $(this);

    const a = $(el).children('a');
    const div = $(el).children('div');

    l.push({
      cover: a.data('original') as string,
      name: a.attr('title')!,
      score: a.find('.tag').first().text(),
      year: a.find('.tag').last().text(),
      actors: getActors(div.children('p').text(), ','),
      status: a.children('span').last().text(),
      id: videoId(a.attr('href')!),
    });
  });

  return l;
};

const _h = ($: CheerioAPI, e: any) => {
  const a = $(e).children('li').children('a');

  const h: HList[] = [];

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

const _w = ($: CheerioAPI) => {
  const week: WList = [];

  for (let i = 1; i <= 7; i++) {
    const day: DList[] = [];

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

    week.push(day);
  }

  return week;
};

export const homeResolver = function (res: string): HomeRes {
  const $ = load(res);

  const l = $('.myui-vodlist.clearfix');

  const h = $('.myui-vodlist__text.active.clearfix');

  return {
    week: _w($),
    japanese: {
      l: _l($, l[0]),
      h: _h($, h[0]),
    },
    chinese: {
      l: _l($, l[1]),
      h: _h($, h[1]),
    },
    movies: {
      l: _l($, l[2]),
      h: _h($, h[2]),
    },
    american: {
      l: _l($, l[3]),
      h: _h($, h[3]),
    },
  };
};
