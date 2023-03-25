import { load } from 'cheerio';
import { trim } from '@utils/string';
import { parseActors, parseCard, parseDirector, parseList, parsePlayList, parseRateWords } from '../utils';
import { typeToRoute } from '@utils';

export const infoResolver = (res: string): ViewRes => {
  const $ = load(res);

  const status = $('span.text-red').text().split('/');

  const data = $('p.data');

  const data_a = data.children('a');

  const play = $('ul.nav a');

  const like = $('#type .myui-vodlist__box');

  const hot = $('.myui-vodlist__text a');

  const type = $('.myui-header__menu .active').children('a').text();

  const video: VideoInfo = {
    type: {
      c: type,
      r: typeToRoute(type),
    },
    id: String($('#rating').data('id')),
    name: $('h1.title').text(),
    rating: {
      star: Number($('#rating').data('score')),
      score: Number($('.branch').text()),
      ratewords: parseRateWords($('#ratewords').text()),
    },
    status: status[0],
    updateTime: status[1],
    cover: $('img.lazyload').data('original') as string,
    actors: parseActors($(data[2]).text()),
    directors: parseDirector($(data[3]).text()),
    category: $(data_a[0]).text(),
    region: $(data_a[1]).text(),
    year: trim($(data_a[2]).text()),
    introduction: $('span.data > p').text(),
    playList: parsePlayList($, play),
  };

  return {
    video,
    like: parseCard($, like),
    hot: parseList($, hot),
  };
};
