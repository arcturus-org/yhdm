export const trim = (s: string, token: string = '\\s') => {
  const re = new RegExp(`^${token}+|${token}+$`, 'g');
  return s.replace(re, '');
};
