/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-30 10:35:13
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-10-08 10:12:50
 */
import { SetVisibilityFilterAction } from './actions';
import { SET_VISIBILITY_FILTER } from './constants';
import { VisibilityFilters } from '../../../typings/type';

const visibilityFilter = (
  state = VisibilityFilters.SHOW_ALL,
  action: SetVisibilityFilterAction,
): VisibilityFilters => {
  console.log(state, action);
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
