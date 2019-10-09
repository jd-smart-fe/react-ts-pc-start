import { fromJS } from 'immutable';

// constants
const addNum = 'Add_Num';
const subBum = 'Sub_Num';

const defaultState = fromJS({
	user: 0
});

// reducer
export function counter(state=defaultState, action) {
    switch(action.type) {
        case 'Add_Num':
            return {num: ++state.num}
        case 'Sub_Num':
            return {num: --state.num}
        default:
            return state
    }
}

// action
export function Add_num() {
    return {type:'Add_Num',payload:"add 1 num"}
}

export function Sub_Num() {
    return {type:'Sub_Num',payload:"sub 1 num"}
}

// 异步加载，可以返回一个函数，可以让action由传统的对象变为action
export function Add_Num_Async() {
    return (dispatch)=> {
        setTimeout(()=>{
            dispatch(Add_num())
        },2000)
    }
}