/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-27 10:27:28
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-27 10:27:28
 */
export interface State {
  questions: string[];
  answers: string[];
}
export type Action =
  | { type: 'ADD_Q'; payload: string }
  | { type: 'ADD_A'; payload: string }
  | { type: 'ITEM_CLEAR' }
  | { type: 'DELETE_ITEM'; payload: { type: number; index: number } };

export type Reducer = (state: State, action: Action) => State;
