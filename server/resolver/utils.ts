import { Element, CheerioAPI, Cheerio } from 'cheerio';
import { getActors, levelColor, videoId } from '@utils';

export const parseList = ($: CheerioAPI, root: Cheerio<Element>): VList[] => {
  const res: VList[] = [];

  for (let i = 0; i < root.length; i++) {
    const el = $(root[0]);

    res.push({
      level: i + 1,
      status: $(el).children('span').first().text(),
      id: videoId(el.attr('href')!),
      name: el.attr('title')!,
      color: levelColor(i),
    });
  }

  return res;
};

export const parseCard = ($: CheerioAPI, root: Cheerio<Element>): CList[] => {
  const res: CList[] = [];

  for (let i = 0; i < root.length; i++) {
    const el = $(root[i]);

    const a = $(el).children('a');
    const div = $(el).children('div');

    res.push({
      cover: a.data('original') as string,
      name: a.attr('title')!,
      score: a.find('.tag').first().text(),
      year: a.find('.tag').last().text(),
      actors: getActors(div.children('p').text(), ','),
      status: a.children('span').last().text(),
      id: videoId(a.attr('href')!),
    });
  }

  return res;
};
