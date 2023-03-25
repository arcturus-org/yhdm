import { Element, CheerioAPI, Cheerio } from 'cheerio';

export const parseVideoId = (url: string): string => {
  const re = /\/view\/(\d+)\.html/;

  return re.exec(url)![1];
};

export const parseList = ($: CheerioAPI, root: Cheerio<Element>): VList[] => {
  const res: VList[] = [];

  for (let i = 0; i < root.length; i++) {
    const el = $(root[0]);

    res.push({
      level: i + 1,
      status: $(el).children('span').first().text(),
      id: parseVideoId(el.attr('href')!),
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
      actors: parseActors(div.children('p').text(), ','),
      status: a.children('span').last().text(),
      id: parseVideoId(a.attr('href')!),
    });
  }

  return res;
};

export const parsePlayList = ($: CheerioAPI, root: Cheerio<Element>): PlayList[] => {
  const res: PlayList[] = [];

  for (let i = 0; i < root.length - 1; i++) {
    res.push({
      source: $(root[i]).text(),
      set: $(`#playlist${i + 1} ul a`).length,
    });
  }

  return res;
};

const __toArray = (re: RegExp, str: string, sep: string): string[] => {
  const res = re.exec(str);

  if (res) {
    const r = res[1].trim().split(sep);

    // remove last element of array if it is empty.
    if (r[r.length - 1] === '') {
      r.pop();
    }

    return r;
  }

  return [];
};

export const parseActors = (str: string, sep: string = '\xa0'): string[] => {
  return __toArray(/主演：(.+)/, str, sep);
};

export const parseDirector = (str: string, sep: string = '\xa0'): string[] => {
  return __toArray(/导演：(.+)/, str, sep);
};

export const parseRateWords = (str: string) => {
  return str.replace(/[\t\n\r\s]/g, '');
};

export const parseUrl = (re: RegExp, s: string): string => {
  const res = re.exec(s);

  if (res) {
    return res[1].replaceAll('\\', '');
  }

  return '';
};

export const parseCurrentUrl = (s: string): string => {
  return parseUrl(/\"url\":\s*\"(.+?)\"/, s);
};

export const parseNextUrl = (s: string): string => {
  return parseUrl(/\"url_next\":\s*\"(.+?)\"/, s);
};

export const parseUpdateTime = (s: string): string => {
  const re = /(\d+-\d+-\d+更新)/;

  const res = re.exec(s);

  if (res) {
    return res[1];
  }

  return '';
};

export const parseTags = (s: string): string[] => {
  const re = /分类：(.+)地区：(.+)年份：(.+)/;

  const res = re.exec(s);

  if (res) {
    return [res[1], res[2], res[3]];
  }

  return [];
};

export const parseBrief = (s: string): string => {
  const re = /简介：(.+)详情/;

  const res = re.exec(s);

  if (res) {
    return res[1];
  }

  return '暂无';
};

export const levelColor = (level: number) => {
  switch (level) {
    case 0:
      return '#dd2c00';
    case 1:
      return '#ff6d00';
    case 2:
      return '#ffab00';
    default:
      return '#03dac6';
  }
};

export const typeToRoute = function (t: string) {
  switch (t) {
    case '日本动漫':
      return 'japanese';
    case '国产动漫':
      return 'chinese';
    case '美国动漫':
      return 'american';
    case '动漫电影':
      return 'movies';
    default:
      return 'home';
  }
};
