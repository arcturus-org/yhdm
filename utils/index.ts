export const videoId = (url: string): string => {
  const re = /\/view\/(?<id>\d+)\.html/;

  return re.exec(url)!.groups!.id;
};

export const getDirector = (str: string) => {
  const re = /导演：(.+)/;

  const res = re.exec(str);

  if (res) {
    return res[1].trim().split('\xa0');
  }

  return [];
};

export const getActors = (str: string) => {
  const re = /主演：(.+)/;

  const res = re.exec(str);

  if (res) {
    return res[1].trim().split('\xa0');
  }

  return [];
};

export const levelColor = (level: number) => {
  switch (level) {
    case 0:
      return '#dd2c00';
    case 1:
      return '#ff6d00';
    case 2:
      return '#ffab00';
    default:
      return '#03dac6';
  }
};

export const log = (msg: any, ...optionalParams: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(msg, ...optionalParams);
  }
};

export const typeToRoute = function (t: string) {
  switch (t) {
    case '日本动漫':
      return 'japanese';
    case '国产动漫':
      return 'chinese';
    case '美国动漫':
      return 'american';
    case '动漫电影':
      return 'movies';
    default:
      return 'home';
  }
};

export const dateToString = function (date: Date | string) {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());
  const second = padZero(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

export const padZero = (num: number) => {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
};

export const getUpdateTime = (s: string): string => {
  const re = /(\d+-\d+-\d+更新)/;

  const res = re.exec(s);

  if (res) {
    return res[1];
  }

  return '';
};

export const getVideoUrl = (s: string): string => {
  const re = /\"url\":\"(.+?)\"/;

  const res = re.exec(s);

  if (res) {
    return res[1].replaceAll('\\', '');
  }

  return '';
};

export const getNextVideoUrl = (s: string): string => {
  const re = /\"url_next\":\"(.+?)\"/;

  const res = re.exec(s);

  if (res) {
    return res[1].replaceAll('\\', '');
  }

  return '';
};