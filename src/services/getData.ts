/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-27 10:27:28
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-29 21:13:01
 */
import request from '../utils/request';
import { DataResponse } from '../typings/index.d';

// window.smartUtil.post

// 接口请求例子
export const getData = async () => {
  const res = await request<DataResponse>({
    url: 'getData',
    method: 'POST',
    data: { id: '' },
  });
  // 发生非业务异常时res为null 非业务异常时直接reject了，不会执行到这 而是到业务代码的catch
  // 详情见`@/utils/request.ts`
  return res && res.data;
};

// 接口请求例子
export const getBannerRequest = async () => {
  const res = await request<DataResponse>({
    url: 'getBannerRequest',
    method: 'POST',
    data: { id: '' },
  });
  // 发生非业务异常时res为null 非业务异常时直接reject了，不会执行到这 而是到业务代码的catch
  // 详情见`@/utils/request.ts`
  return res && res.data;
};

// 接口请求例子
export const getRecommendListRequest = async () => {
  const res = await request<DataResponse>({
    url: 'getRecommendListRequest',
    method: 'POST',
    data: { id: '' },
  });
  // 发生非业务异常时res为null 非业务异常时直接reject了，不会执行到这 而是到业务代码的catch
  // 详情见`@/utils/request.ts`
  return res && res.data;
};

// 接口请求例子
export const getSingerInfoRequest = async () => {
  const res = await request<DataResponse>({
    url: 'getSingerInfoRequest',
    method: 'POST',
    data: { id: '' },
  });
  // 发生非业务异常时res为null 非业务异常时直接reject了，不会执行到这 而是到业务代码的catch
  // 详情见`@/utils/request.ts`
  return res && res.data;
};
