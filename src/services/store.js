import { createStore, combineReducers } from 'redux';

import visitedReducer from './visited/reducer';

const rootReducer = combineReducers({
  visited: visitedReducer,
});

const store = createStore(rootReducer);

export default store;
