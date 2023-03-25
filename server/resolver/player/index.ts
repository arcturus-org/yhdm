import { load } from 'cheerio';
import { parseCard, parseCurrentUrl, parseNextUrl, parsePlayList, parseUpdateTime } from '../utils';

export const playerResolver = (res: string): PlayerRes => {
  const $ = load(res);

  const like = $('#type a.myui-vodlist__thumb');

  const div_url = $('.embed-responsive.clearfix');

  const intro = $('.text-muted.margin-0');
  const intro_a = intro.children('a');

  const play = $('ul.nav a');

  const video: PlayerVideoInfo = {
    url: parseCurrentUrl(div_url.text()),
    nextUrl: parseNextUrl(div_url.text()),
    name: $('.text-fff').text(),
    year: $(intro_a[2]).text().replace('\t', ''),
    updateTime: parseUpdateTime(intro.text()),
    id: String($('.digg_link').data('id')),
    type: $(intro_a[0]).text(),
    region: $(intro_a[1]).text(),
    score: intro.children('span').text(),
    playList: parsePlayList($, play),
    like: Number($($('.digg_num')[0]).text()),
    negative: Number($($('.digg_num')[1]).text()),
  };

  return { video, like: parseCard($, like) };
};
