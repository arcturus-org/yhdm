import { CheerioAPI, load } from 'cheerio';

const newResolver = function ($: CheerioAPI, e: any) {
  const div = $(e).children('li').children('div');
  const newest: NewestItem[] = [];

  div.each(function () {
    const el = $(this);

    const a = $(el).children('a');
    const div = $(el).children('div');

    newest.push({
      cover: a.data('original') as string,
      title: a.attr('title')!,
      score: a.find('.tag').first().text(),
      year: a.find('.tag').last().text(),
      role: div.children('p').text().replace('主演：', ''),
      status: a.children('span').last().text(),
      url: a.attr('href')!.replace('.html', ''),
    });
  });

  return newest;
};

const hotResolver = function ($: CheerioAPI, e: any) {
  const hottest: HotItem[] = [];
  const a = $(e).children('li').children('a');

  a.each(function (idx) {
    const el = $(this);

    let color = '#03dac6';

    if (idx === 0) {
      color = '#DD2C00';
    } else if (idx === 1) {
      color = '#FF6D00';
    } else if (idx === 2) {
      color = '#FFAB00';
    }

    hottest.push({
      level: idx + 1,
      status: $(el).children('span').first().text(),
      url: el.attr('href')!.replace('.html', ''),
      name: el.attr('title')!,
      color,
    });
  });

  return hottest;
};

export const homeResolver = function (res: string): IHomeDataRes {
  const $ = load(res);

  // 周期
  const weeks: IWeeks = {};

  for (let i = 1; i <= 7; i++) {
    const day: WeekItem[] = [];

    const a = $(`#week${i} a`);

    a.each(function (idx) {
      const el = $(this);

      let color = '#03dac6';

      if (idx === 0) {
        color = '#DD2C00';
      } else if (idx === 1) {
        color = '#FF6D00';
      } else if (idx === 2) {
        color = '#FFAB00';
      }

      day.push({
        level: Number($(el).children('span').last().text()),
        status: $(el).children('span').first().text(),
        url: el.attr('href')!.replace('.html', ''),
        name: el.attr('title')!,
        color,
      });
    });

    weeks[i] = day;
  }

  // 最新
  const newest = $('.myui-vodlist.clearfix');

  // 最热
  const hottest = $('.myui-vodlist__text.active.clearfix');

  return {
    weeks,
    jnew: newResolver($, newest[0]),
    jhot: hotResolver($, hottest[0]),
    cnew: newResolver($, newest[1]),
    chot: hotResolver($, hottest[1]),
    mnew: newResolver($, newest[2]),
    mhot: hotResolver($, hottest[2]),
    unew: newResolver($, newest[3]),
    uhot: hotResolver($, hottest[3]),
  };
};
