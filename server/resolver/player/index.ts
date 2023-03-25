import { load } from 'cheerio';
import { trim } from '@utils/string';
import { parseCard, parseCurrentUrl, parseNextUrl, parsePlayList, parseUpdateTime } from '../utils';

export const onlyUrlResolver = (res: string) => {
  const $ = load(res);

  const url = $('.embed-responsive').text();

  return {
    url: parseCurrentUrl(url),
    nextUrl: parseNextUrl(url),
  };
};

export const playerResolver = (res: string): PlayerRes => {
  const $ = load(res);

  const like = $('#type .myui-vodlist__box');

  const url = $('.embed-responsive').text();

  const intro = $('.text-muted.margin-0');
  const intro_a = intro.children('a');

  const play = $('ul.nav a');

  return {
    video: {
      url: parseCurrentUrl(url),
      nextUrl: parseNextUrl(url),
      name: $('.text-fff').text(),
      year: trim($(intro_a[2]).text()),
      updateTime: parseUpdateTime(intro.text()),
      id: String($('.digg_link').data('id')),
      type: $(intro_a[0]).text(),
      region: $(intro_a[1]).text(),
      score: intro.children('span').text(),
      playList: parsePlayList($, play),
      like: Number($($('.digg_num')[0]).text()),
      negative: Number($($('.digg_num')[1]).text()),
    },
    like: parseCard($, like),
  };
};
