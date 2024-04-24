// centralSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const centralSlice = createSlice({
  name: 'central',
  initialState: {
    activePage: 'DASHBOARD',
    isSidebarOpen: false,
  },
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setIsSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setActivePage, toggleSidebar, setIsSidebarOpen } =
  centralSlice.actions;

export default centralSlice.reducer;
