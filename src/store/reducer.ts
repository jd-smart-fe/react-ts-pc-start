/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-27 10:27:28
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-30 12:21:46
 */
import { combineReducers } from 'redux-immutable';
import { reducer as addTodoReducer } from '../application/addTodo/store/index';
import { reducer as filterReducer } from '../application/filterLink/store/index';

export default combineReducers({
  todos: addTodoReducer,
  visibilityFilter: filterReducer,
});
