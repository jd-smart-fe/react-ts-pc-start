/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-30 10:41:59
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-30 10:45:40
 */
import { ToggleTodoAction } from './actions';
import { TOGGLE_TODO } from './constants';
import { Todo } from '../../../typings/type';

const todos = (state: Todo[] = [], action: ToggleTodoAction) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map(
        (todo: Todo): Todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
