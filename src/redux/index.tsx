import thunk from 'redux-thunk';
import { combineReducers } from 'redux-immutable';
import { createStore, compose, applyMiddleware } from 'redux';

import * as demoReducer from '../container/demo/reducer';

const reducer = combineReducers({
	demo: demoReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

export default store;







