import { test, expect } from 'vitest';
import { dateToString } from '.';

test('time format', () => {
  expect(dateToString('2023-03-25T14:56:26.531Z')).toBe('2023-03-25 22:56:26');
  expect(dateToString('xxxx')).toBe('Invalid Date');
});
