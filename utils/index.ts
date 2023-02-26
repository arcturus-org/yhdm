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
