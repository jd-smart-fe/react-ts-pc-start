/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-30 10:07:36
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-10-08 10:54:50
 */
import * as actionTypes from './constants';

let nextTodoId = 0;

export interface AddTodoAction {
  id: number;
  text: string;
  type: actionTypes.ADD_TODO;
}
export interface ToggleTodoAction {
  id: number;
  type: actionTypes.TOGGLE_TODO;
}

export type TodoAction = AddTodoAction | ToggleTodoAction;

export const toggleTodo = (id: number): TodoAction => ({
  id,
  type: actionTypes.TOGGLE_TODO,
});

export const addTodo = (text: string): TodoAction => ({
  id: nextTodoId++,
  text,
  type: actionTypes.ADD_TODO,
});
