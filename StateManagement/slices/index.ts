import {combineReducers} from '@reduxjs/toolkit';
import auth from './auth';
import todos from './todos';
import posts from './posts';

const rootReducer = combineReducers({
  auth,
  todos,
  posts,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
