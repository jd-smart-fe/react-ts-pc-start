/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-27 10:27:28
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-10-08 10:53:12
 */
import { combineReducers } from 'redux';
import { reducer as todoReducer } from '../application/addTodo/store/index';
import { reducer as filterReducer } from '../application/filterLink/store/index';

export default combineReducers({
  todos: todoReducer,
  visibilityFilter: filterReducer,
});
