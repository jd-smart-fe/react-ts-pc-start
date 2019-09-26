export interface State {
    questions:string[],
    answers:string[]
}
export type Action =
  | { type: 'ADD_Q'; payload: string} 
  | { type: 'ADD_A'; payload: string }
  | { type: 'ITEM_CLEAR'}
  | { type: 'DELETE_ITEM'; payload:{type:number,index:number}};
 

export type Reducer = (state: State, action: Action) => State;