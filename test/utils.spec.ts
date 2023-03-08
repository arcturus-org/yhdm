import { test, expect } from 'vitest';
import {
  videoId,
  levelColor,
  getUpdateTime,
  getVideoUrl,
  getNextVideoUrl,
} from '../utils';

test('video id', () => {
  expect(videoId('/view/9081.html')).toBe('9081');
});

test('level color', () => {
  expect(levelColor(0)).toBe('#dd2c00');
  expect(levelColor(1)).toBe('#ff6d00');
  expect(levelColor(2)).toBe('#ffab00');
  expect(levelColor(10)).toBe('#03dac6');
});

test('update time', () => {
  expect(
    getUpdateTime(
      '\n\t\t\t\t\t\t2023-03-01更新 / 7.0分 / 国产动漫 / 大陆 / 2022\t\n\t\t\t\t\t'
    )
  ).toBe('2023-03-01更新');
});

test('url', () => {
  expect(
    getVideoUrl(
      '\n\t\t\t\tvar player_aaaa={"flag":"play","encrypt":0,"trysee":0,"points":0,"link":"\\/player\\/8508-0-0.html","link_next":"\\/player\\/8508-0-2.html","link_pre":"\\/player\\/8508-0-0.html","vod_data":{"vod_name":"\\u661f\\u6cb3\\u4e07\\u91cc\\u4e0d\\u5982\\u4f60","vod_actor":"","vod_director":"\\u5434\\u660e\\u777f","vod_class":"\\u9006\\u88ad,\\u7a7f\\u8d8a"},"url":"https:\\/\\/v6.dious.cc\\/20220426\\/0JLPWStd\\/index.m3u8","url_next":"https:\\/\\/v6.dious.cc\\/20220426\\/np1ve63F\\/index.m3u8","from":"bdhd","server":"no","note":"","id":"8508","sid":1,"nid":2}\t'
    )
  ).toBe('https://v6.dious.cc/20220426/0JLPWStd/index.m3u8');
  expect(
    getNextVideoUrl(
      '\n\t\t\t\tvar player_aaaa={"flag":"play","encrypt":0,"trysee":0,"points":0,"link":"\\/player\\/8508-0-0.html","link_next":"\\/player\\/8508-0-2.html","link_pre":"\\/player\\/8508-0-0.html","vod_data":{"vod_name":"\\u661f\\u6cb3\\u4e07\\u91cc\\u4e0d\\u5982\\u4f60","vod_actor":"","vod_director":"\\u5434\\u660e\\u777f","vod_class":"\\u9006\\u88ad,\\u7a7f\\u8d8a"},"url":"https:\\/\\/v6.dious.cc\\/20220426\\/0JLPWStd\\/index.m3u8","url_next":"https:\\/\\/v6.dious.cc\\/20220426\\/np1ve63F\\/index.m3u8","from":"bdhd","server":"no","note":"","id":"8508","sid":1,"nid":2}\t'
    )
  ).toBe('https://v6.dious.cc/20220426/np1ve63F/index.m3u8');
});
