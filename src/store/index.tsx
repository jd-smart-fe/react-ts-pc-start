import React from 'react';

import { Props } from '../typings/type';

import reducer, { initialState } from './reducers';
import applyMiddleware from './middleware';
import { Action, State } from './types';

/**
 * 初始化上下文
 * storeCxt：store 数据
 * dispatchCtx：dispatch 函数
 */
const storeCxt = React.createContext(initialState);
const dispatchCtx = React.createContext((() => 0) as React.Dispatch<Action>);

const Provider = (props: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // 让 dispatch 支持 middleware
  const enhancedDispatch = applyMiddleware(state, dispatch);

  return (
    <dispatchCtx.Provider value={enhancedDispatch}>
      <storeCxt.Provider value={state}>{props.children}</storeCxt.Provider>
    </dispatchCtx.Provider>
  );
};

/**
 * 组件内部使用方式：
 *
 * const agents = useStore('agents'); // 获取 store 中的 agents 数据
 * const store = useStore(); // 获取全部 store
 *
 * const dispath = useDispatch(); // 获取 dispatch 方法
 * dispath({ // 发送 action
 *   type: 'ACTION_TYPE',
 *   payload
 * });
 */
export const useDispatch = () => React.useContext(dispatchCtx);
export const useStore = (nameSpace: keyof State | null) => {
  const store = React.useContext(storeCxt);
  return nameSpace !== null ? store[nameSpace] : store;
};

export default Provider;
