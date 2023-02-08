interface WeekItem {
  level: number;
  name: string;
  status: string;
  url: string;
  color: string;
}

type IWeeks = Record<number, WeekItem[]>;

interface IHomeDataRes {
  weeks: IWeeks;
  jnew: NewestItem[]; // 最新日本动漫
  jhot: HotItem[]; // 最热日本动漫
  cnew: NewestItem[]; // 最新国产动漫
  chot: HotItem[]; // 最热国产动漫
  unew: NewestItem[]; // 最新美国动漫
  uhot: HotItem[]; // 最热美国动漫
  mnew: NewestItem[]; // 最新动漫电影
  mhot: HotItem[]; // 最热动漫电影
}

interface IState extends IHomeDataRes {
  loading: boolean;
}

type HotItem = WeekItem;

interface NewestItem {
  title: string;
  role: string;
  cover: string;
  year: string;
  score: string;
  url: string;
  status: string;
}
