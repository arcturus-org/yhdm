import { load } from 'cheerio';
import {
  getActors,
  getBrief,
  getDirector,
  getTags,
  levelColor,
  videoId,
} from '@utils';

export const searchResolver = (res: string): SearchRes => {
  const $ = load(res);

  const search: CList[] = [];

  const li = $('li.clearfix');

  li.each(function () {
    const a = $(this).children('div.thumb').children('a');
    const p = $(this).children('div.detail').children('p');

    search.push({
      actors: getActors($(p[1]).text(), ','),
      director: getDirector($(p[0]).text(), ','),
      cover: a.data('original') as string,
      year: a.find('.tag').last().text(),
      score: a.find('.tag').first().text(),
      id: videoId(a.attr('href')!),
      name: a.attr('title')!,
      status: a.children('span').last().text(),
      tags: getTags($(p[2]).text()),
      brief: getBrief($(p[3]).text()),
    });
  });

  const hot: VList[] = [];

  const hot_a = $('.myui-vodlist__text a');

  hot_a.each(function (idx) {
    const a = $(this);

    hot.push({
      id: videoId(a.attr('href')!),
      status: a.children('span').first().text(),
      level: Number(a.children('span').last().text()),
      color: levelColor(idx),
      name: a.attr('title')!,
    });
  });

  const p = $('.myui-page li.hidden-xs a');

  return { search, hot, page: p.length };
};
