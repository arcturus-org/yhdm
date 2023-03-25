import { load } from 'cheerio';
import { parseActors, parseBrief, parseDirector, parseList, parseTags, parseVideoId } from '../utils';

export const onlySearchResolver = (res: string): OnlySearchRes => {
  const $ = load(res);

  const a = $('.myui-page li.hidden-xs a');

  const search: CList[] = [];

  const li = $('li.clearfix');

  for (let i = 0; i < li.length; i++) {
    const r = $(li[i]);

    const a = $(r).children('div.thumb').children('a');
    const p = $(r).children('div.detail').children('p');

    search.push({
      actors: parseActors($(p[1]).text(), ','),
      directors: parseDirector($(p[0]).text(), ','),
      cover: a.data('original') as string,
      year: a.find('.tag').last().text(),
      score: a.find('.tag').first().text(),
      id: parseVideoId(a.attr('href')!),
      name: a.attr('title')!,
      status: a.children('span').last().text(),
      tags: parseTags($(p[2]).text()),
      brief: parseBrief($(p[3]).text()),
    });
  }

  return {
    search,
    page: {
      start: Number(a.first().text()),
      end: Number(a.last().text()),
      len: a.length,
    },
  };
};

export const searchResolver = (res: string): SearchRes => {
  const $ = load(res);

  const hot = $('.myui-vodlist__text a');

  return Object.assign(
    {
      hot: parseList($, hot),
    },
    onlySearchResolver(res)
  );
};
