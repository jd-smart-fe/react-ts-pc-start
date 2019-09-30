/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-30 10:41:59
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-30 11:57:46
 */
import { TOGGLE_TODO } from './constants';

export interface ToggleTodoAction {
  id: number;
  type: TOGGLE_TODO;
}

export const toggleTodo = (id: number): ToggleTodoAction => ({
  id,
  // eslint-disable-next-line prettier/prettier
  type: TOGGLE_TODO,
});
