import { test, expect } from 'vitest';
import { trim } from '.';

test('trim', () => {
  expect(trim(' hello')).toBe('hello');
  expect(trim('hello ')).toBe('hello');
  expect(trim(' hello ')).toBe('hello');
  expect(trim('\thello\t')).toBe('hello');
  expect(trim('xhello', 'x')).toBe('hello');
});
