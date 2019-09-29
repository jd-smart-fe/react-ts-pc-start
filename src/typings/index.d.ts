/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-27 10:27:28
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-29 15:47:38
 */
// response 结构
export type Response<T> = {
  [P in keyof T]: T[P];
} & { code: number };

// 接口请求相关类型定义
export { DataResponse } from './getData.d';
