export const padZero = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

export const dateToString = function (d: string) {
  const date = new Date(d);

  if (date.toString() === 'Invalid Date') {
    return 'Invalid Date';
  }

  const Y = date.getFullYear();
  const m = padZero(date.getMonth() + 1);
  const D = padZero(date.getDate());
  const H = padZero(date.getHours());
  const M = padZero(date.getMinutes());
  const S = padZero(date.getSeconds());

  return `${Y}-${m}-${D} ${H}:${M}:${S}`;
};
