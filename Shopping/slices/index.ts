import {combineReducers} from '@reduxjs/toolkit';
import shoppinglistReducer from './slice';

const rootReducer = combineReducers({
  shoppingList: shoppinglistReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
