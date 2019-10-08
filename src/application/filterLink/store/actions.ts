/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-30 10:35:13
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-10-08 09:58:33
 */
import { SET_VISIBILITY_FILTER } from './constants';
import { VisibilityFilters } from '../../../typings/type';

export interface SetVisibilityFilterAction {
  filter: VisibilityFilters;
  type: SET_VISIBILITY_FILTER;
}

export const setVisibilityFilter = (
  filter: VisibilityFilters,
): SetVisibilityFilterAction => ({
  filter,
  type: SET_VISIBILITY_FILTER,
});
