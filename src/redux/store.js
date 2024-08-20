import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import widgetsReducer from './widgetsSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    widgets: widgetsReducer
  }
});

export default store;
