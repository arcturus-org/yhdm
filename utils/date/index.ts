const __padZero = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

export const dateToString = function (d: string) {
  const date = new Date(d);

  if (date.toString() === 'Invalid Date') {
    return 'Invalid Date';
  }

  const Y = date.getFullYear();
  const m = __padZero(date.getMonth() + 1);
  const D = __padZero(date.getDate());
  const H = __padZero(date.getHours());
  const M = __padZero(date.getMinutes());
  const S = __padZero(date.getSeconds());

  return `${Y}-${m}-${D} ${H}:${M}:${S}`;
};
