import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    setCategories: (state, action) => action.payload,
    addWidgetToCategory: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidgetFromCategory: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    }
  }
});

export const { setCategories, addWidgetToCategory, removeWidgetFromCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
