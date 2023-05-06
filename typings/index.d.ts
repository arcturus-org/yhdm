interface Video {
  /**
   * 视频名称
   */
  name: string;

  /**
   * 更新状态
   */
  status: string;

  /**
   * 视频 id
   */
  id: string;
}

/**
 * 视频列表
 */
interface VList extends Video {
  /**
   * 排名
   */
  level: number;

  /**
   * 排名颜色
   */
  color: string;
}

/**
 * 每日视频列表
 */
type DList = VList;

/**
 * 周视频列表
 */
type WList = Array<DList[]>;

/**
 * 视频热榜
 */
type HList = VList;

/**
 * 带封面的视频列表
 */
interface CList extends Video {
  /**
   * 主演
   */
  actors: string[];

  /**
   * 导演
   */
  directors?: string[];

  /**
   * 简介
   */
  brief?: string;

  /**
   * 视频封面
   */
  cover: string;

  /**
   * 发布时间
   */
  year: string;

  /**
   * 评分
   */
  score: string;

  /**
   * 分类
   */
  tags?: string[];
}

type vType = 'japanese' | 'chinese' | 'movies' | 'american';

interface HomeRes {
  /**
   * 每日热榜
   */
  week: WList;

  japanese: {
    /**
     * 最新日本动漫
     */
    latest: CList[];

    /**
     * 最热日本动漫
     */
    hot: HList[];
  };

  chinese: {
    /**
     * 最新国产动漫
     */
    latest: CList[];

    /**
     * 最热国产动漫
     */
    hot: HList[];
  };

  american: {
    /**
     * 最新美国动漫
     */
    latest: CList[];

    /**
     * 最热美国动漫
     */
    hot: HList[];
  };

  movies: {
    /**
     * 最新动漫电影
     */
    latest: CList[];

    /**
     * 最热动漫电影
     */
    hot: HList[];
  };
}

interface VideoInfo {
  /**
   * 视频类型
   */
  type: {
    /**
     * 中文类型
     */
    c: string;
    /**
     * 路由
     */
    r: string;
  };

  /**
   * 视频名称
   */
  name: string;

  /**
   * video id
   */
  id: string;

  rating: {
    /**
     * 视频评分
     */
    score: number;

    /**
     * 视频星数
     */
    star: number;

    /**
     * 推荐评价
     */
    ratewords: string;
  };

  /**
   * 视频更新状态
   */
  status: string;

  /**
   * 视频更新时间
   */
  updateTime?: string;

  /**
   * 视频封面
   */
  cover: string;

  /**
   * 主演
   */
  actors: string[];

  /**
   * 导演
   */
  directors: string[];

  /**
   * 分类
   */
  category: string;

  /**
   * 地区
   */
  region: string;

  /**
   * 年份
   */
  year: string;

  /**
   * 简介
   */
  introduction: string;

  /**
   * 播放地址
   */
  playList: PlayList[];
}

interface PlayList {
  source: string;
  set: number;
}

interface ViewRes {
  /**
   * 视频详细信息
   */
  video: VideoInfo;

  /**
   * 猜你喜欢
   */
  like: CList[];

  /**
   * 热播
   */
  hot: VList[];
}

interface IState {
  /**
   * 加载状态
   */
  loading: boolean;

  /**
   * 首页数据
   */
  home: HomeRes;

  /**
   * 视频详情页数据
   */
  detail: ViewRes;

  /**
   * 播放页内容
   */
  player: Player;

  /**
   * 搜索结果
   */
  search: SearchRes;
}

interface PlayerVideoInfo {
  /**
   * 视频名称
   */
  name: string;

  /**
   * 播放地址
   */
  url: string;

  /**
   * 下一集
   */
  nextUrl: string;

  /**
   * 视频年份
   */
  year: string;

  /**
   * 更新时间
   */
  updateTime: string;

  /**
   * 视频 id
   */
  id: string;

  /**
   * 视频类型
   */
  type: {
    /**
     * 中文类型
     */
    c: string;
    /**
     * 路由
     */
    r: string;
  };

  /**
   * 视频地区
   */
  region: string;

  /**
   * 评分
   */
  score: string;

  /**
   * 播放列表
   */
  playList: PlayList[];

  /**
   * 点赞数
   */
  like: number;

  /**
   * 差评数
   */
  negative: number;
}

interface PlayerRes {
  /**
   * 播放视频信息
   */
  video: PlayerVideoInfo;

  /**
   * 猜你喜欢
   */
  like: CList[];
}

interface OnlySearchRes {
  /**
   * 搜索结果
   */
  search: CList[];

  /**
   * 搜索页数
   */
  page: {
    start: number;
    end: number;
    len: number;
  };
}

interface SearchRes extends OnlySearchRes {
  /**
   * 热榜
   */
  hot: VList[];
}
