import { Element, CheerioAPI, load } from 'cheerio';
import { parseCard, parseList } from '../utils';

const parseLatest = ($: CheerioAPI, root: Element): CList[] => {
  const p = $(root).children('li').children('div');

  return parseCard($, p);
};

const parseHot = ($: CheerioAPI, root: Element): HList[] => {
  const a = $(root).children('li').children('a');

  return parseList($, a) as HList[];
};

const parseWeek = ($: CheerioAPI): WList => {
  const week: WList = [];

  for (let i = 1; i <= 7; i++) {
    const a = $(`#week${i} a`);

    week.push(parseList($, a) as DList[]);
  }

  return week;
};

export const homeResolver = function (res: string): HomeRes {
  const $ = load(res);

  const latest = $('ul.myui-vodlist');

  const hot = $('ul.myui-vodlist__text.active');

  return {
    week: parseWeek($),
    japanese: {
      latest: parseLatest($, latest[0]),
      hot: parseHot($, hot[0]),
    },
    chinese: {
      latest: parseLatest($, latest[1]),
      hot: parseHot($, hot[1]),
    },
    movies: {
      latest: parseLatest($, latest[2]),
      hot: parseHot($, hot[2]),
    },
    american: {
      latest: parseLatest($, latest[3]),
      hot: parseHot($, hot[3]),
    },
  };
};
