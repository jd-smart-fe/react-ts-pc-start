/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-30 10:11:53
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-10-08 10:31:23
 */
import { TodoAction } from './actions';
import { ADD_TODO, TOGGLE_TODO } from './constants';
import { Todo } from '../../../typings/type';

const todos = (state: Todo[] = [], action: TodoAction) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          id: action.id,
          text: action.text,
          // eslint-disable-next-line comma-dangle
        },
      ];
    case TOGGLE_TODO:
      return state.map(
        (todo: Todo): Todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo,
      );
    default:
      return state;
  }
};

export default todos;
