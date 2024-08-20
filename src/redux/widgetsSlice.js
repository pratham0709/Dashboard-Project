import { createSlice } from '@reduxjs/toolkit';

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState: [],
  reducers: {
    setWidgets: (state, action) => action.payload,
    addWidget: (state, action) => {
      state.push(action.payload);
    },
    removeWidget: (state, action) => {
      return state.filter(widget => widget.id !== action.payload);
    }
  }
});

export const { setWidgets, addWidget, removeWidget } = widgetsSlice.actions;
export default widgetsSlice.reducer;
