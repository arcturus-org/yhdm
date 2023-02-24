import { test, expect } from 'vitest';
import { videoId, levelColor } from '../utils';

test('video id', () => {
  expect(videoId('/view/9081.html')).toBe('9081');
});

test('level color', () => {
  expect(levelColor(0)).toBe('#dd2c00');
  expect(levelColor(1)).toBe('#ff6d00');
  expect(levelColor(2)).toBe('#ffab00');
  expect(levelColor(10)).toBe('#03dac6');
});
