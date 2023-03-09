import { load } from 'cheerio';
import {
  getActors,
  getDirector,
  levelColor,
  typeToRoute,
  videoId,
} from '@utils';

export const infoResolver = (res: string): ViewRes => {
  const $ = load(res);

  const title = $('h1.title').text();

  const status = $('span.text-red').text().split('/');

  const data = $('p.data');

  const data_a = data.children('a');

  const actors = getActors($(data[2]).text());

  const directors = getDirector($(data[3]).text());

  const play_a = $('ul.nav a');

  const playList: PlayList[] = [];

  for (let i = 0; i < play_a.length - 1; i++) {
    playList.push({
      source: $(play_a[i]).text(),
      set: $(`#playlist${i + 1} ul a`).length,
    });
  }

  const like_a = $('#type a.myui-vodlist__thumb');

  const like: CList[] = [];

  like_a.each(function () {
    const a = $(this);
    const div = a.next();

    like.push({
      actors: getActors(div.children('p').text()),
      cover: a.data('original') as string,
      year: a.find('.tag').last().text(),
      score: a.find('.tag').first().text(),
      id: videoId(a.attr('href')!),
      name: a.attr('title')!,
      status: a.children('span').last().text(),
    });
  });

  const hot_a = $('.myui-vodlist__text a');

  const hot: VList[] = [];

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

  const type = $('.myui-header__menu .active').children('a').text();

  const video: VideoInfo = {
    type: {
      c: type,
      r: typeToRoute(type),
    },
    id: String($('#rating').data('id')),
    name: title,
    rating: {
      star: Number($('#rating').data('score')),
      score: Number($('.branch').text()),
      ratewords: $('#ratewords')
        .text()
        .replace(/[\t\n\r\s]/g, ''),
    },
    status: status[0],
    updateTime: new Date(status[1]),
    cover: $('img.lazyload').data('original') as string,
    actors,
    directors,
    category: $(data_a[0]).text(),
    region: $(data_a[1]).text(),
    year: $(data_a[2]).text().replace(/\t/g, ''),
    introduction: $('span.data > p').text(),
    playList,
  };

  return {
    video,
    like,
    hot,
  };
};
