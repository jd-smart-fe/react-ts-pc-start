/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-27 10:27:28
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-29 15:41:52
 */
// import { setIn } from 'immutable';

import { State, Reducer } from './types';

export const initialState: State = {
  questions: [],
  answers: []
};

const reducer: Reducer = (state, action) => {
  const curState = state || {};
  console.log('action.type', action.type);
  switch (action.type) {
    case 'ADD_Q': {
      const { payload } = action;
      return { ...curState, questions: [...curState.questions, payload] };
    }
    case 'ADD_A': {
      const { payload } = action;
      return { ...curState, answers: [...curState.answers, payload] };
    }
    case 'ITEM_CLEAR': {
      return { ...initialState };
    }
    case 'DELETE_ITEM': {
      const { type, index } = action.payload;
      let tmp = [];
      if (type === 1) {
        tmp = curState.questions.slice();
        tmp.splice(index, 1);
        return { ...curState, questions: [...tmp] };
      }
      tmp = curState.answers.slice();
      tmp.splice(index, 1);
      return { ...curState, answers: [...tmp] };
    }
    default:
      return curState;
  }
};

export default reducer;
