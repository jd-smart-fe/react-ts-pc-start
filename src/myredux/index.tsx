import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux-immutable';

import { counter } from '../container/demo/reducer';

const reducer = combineReducers({
  demo: counter,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
