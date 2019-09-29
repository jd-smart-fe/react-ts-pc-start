/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-25 22:02:02
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-25 22:02:02
 */
import { State, Action } from './types';

const applyMiddleware = (
  state: State,
  dispatch: React.Dispatch<Action>
) => async (action: Action) => {
  // middleware 逻辑
  // switch (action.type) {

  // }
  // 继续默认的 dispatch 逻辑
  dispatch(action);
};

export default applyMiddleware;
