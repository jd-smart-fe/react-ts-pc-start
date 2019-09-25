// import { setIn } from 'immutable';

import { State, Reducer } from './types';

export const initialState: State = {
  questions:[],
  answers:[],
};

const reducer: Reducer = (state, action) => {
  state = state || {};
  console.log('action.type',action.type);
  switch (action.type) {
  
    case 'ADD_Q': {
      const { payload } = action;
      console.log('执行了ADD_Q操作')
      return Object.assign({}, state, {
        questions: [
          ...state.questions,
          payload
        ]
      })
    }
    case 'ADD_A': {
      const { payload } = action;
      console.log('执行了ADD_A操作')
      return Object.assign({}, state, {
        answers: [
          ...state.answers,
          payload
        ]
      })
    }
    case 'ITEM_CLEAR': {
      console.log('执行了ITEM_CLEAR操作')
      return Object.assign({},initialState)
    }
    case 'DELETE_ITEM': {
      console.log('执行了DELETE_ITEM操作')
      const { type,index } = action.payload;
      let tmp = [];
      if(type===1) {
        tmp = state.questions.slice();
        tmp.splice(index,1);
        return Object.assign({}, state, {
         questions: [
           ...tmp
         ]
        })
      }else {
        tmp = state.answers.slice();
        tmp.splice(index,1);
        return Object.assign({}, state, {
          answers: [
            ...tmp
          ]
        })
      }
    }
    default:
      return state;
  }
};

export default reducer;
