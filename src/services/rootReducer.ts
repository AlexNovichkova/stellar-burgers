import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import ingredientsSlice from './slices/ingredientsSlice';
import orderSlice from './slices/orderSlice';
import feedSlice from './slices/feedSlice';
export const rootReducer = combineReducers({
  ingredients: ingredientsSlice,
  user: userSlice,
  feeds: feedSlice,
  order: orderSlice
});

export default rootReducer;
