// response 结构
export type Response<T> = {
    [P in keyof T]: T[P];
} & { code: number };

// introPage推荐训练页面相关类型定义
export { IntroListResponse,copyIntroToMyType} from './introList';