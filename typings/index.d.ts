interface L {
  level: number;
  name: string;
  status: string;
  id: string;
  color: string;
}

// week item
type W = L;

type WM = Record<number, W[]>;

// hottest
type H = L;

// lastest
interface LA {
  title: string;
  role: string;
  cover: string;
  year: string;
  score: string;
  id: string;
  status: string;
}

interface HomeRes {
  week: WM; // 每日热榜
  latest_japanese_anime: LA[]; // 最新日本动漫
  hottest_japanese_anime: H[]; // 最热日本动漫
  latest_chinese_anime: LA[]; // 最新国产动漫
  hottest_chinese_anime: H[]; // 最热国产动漫
  latest_american_anime: LA[]; // 最新美国动漫
  hottest_american_anime: H[]; // 最热美国动漫
  latest_anime_movie: LA[]; // 最新动漫电影
  hottest_anime_movie: H[]; // 最热动漫电影
}

interface IState {
  loading: boolean;
  home: HomeRes;
}
