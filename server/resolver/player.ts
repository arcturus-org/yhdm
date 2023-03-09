import { load } from 'cheerio';
import {
  getActors,
  getNextVideoUrl,
  getUpdateTime,
  getVideoUrl,
  videoId,
} from '@utils';

export const playerResolver = (res: string): Player => {
  const $ = load(res);

  const div_url = $('.embed-responsive.clearfix');

  const intro = $('.text-muted.margin-0');
  const intro_a = intro.children('a');

  const play_a = $('ul.nav a');

  const playList: PlayList[] = [];

  for (let i = 0; i < play_a.length - 1; i++) {
    playList.push({
      source: $(play_a[i]).text(),
      set: $(`#playlist${i + 1} ul a`).length,
    });
  }

  const video: PlayerVideoInfo = {
    url: getVideoUrl(div_url.text()),
    nextUrl: getNextVideoUrl(div_url.text()),
    name: $('.text-fff').text(),
    year: $(intro_a[2]).text().replace('\t', ''),
    updateTime: getUpdateTime(intro.text()),
    id: String($('.digg_link').data('id')),
    type: $(intro_a[0]).text(),
    region: $(intro_a[1]).text(),
    score: intro.children('span').text(),
    playList: playList,
    like: Number($($('.digg_num')[0]).text()),
    negative: Number($($('.digg_num')[1]).text()),
  };

  const like_a = $('#type a.myui-vodlist__thumb');

  const like: CList[] = [];

  like_a.each(function () {
    const a = $(this);
    const div = a.next();

    like.push({
      actors: getActors(div.children('p').text(), ','),
      cover: a.data('original') as string,
      year: a.find('.tag').last().text(),
      score: a.find('.tag').first().text(),
      id: videoId(a.attr('href')!),
      name: a.attr('title')!,
      status: a.children('span').last().text(),
    });
  });

  return { video, like };
};
