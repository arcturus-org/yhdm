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
   * 视频角色
   */
  role: string;

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
    l: CList[];

    /**
     * 最热日本动漫
     */
    h: HList[];
  };

  chinese: {
    /**
     * 最新国产动漫
     */
    l: CList[];

    /**
     * 最热国产动漫
     */
    h: HList[];
  };

  american: {
    /**
     * 最新美国动漫
     */
    l: CList[];

    /**
     * 最热美国动漫
     */
    h: HList[];
  };

  movies: {
    /**
     * 最新动漫电影
     */
    l: CList[];

    /**
     * 最热动漫电影
     */
    h: HList[];
  };
}

interface ViewRes {}

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
}
