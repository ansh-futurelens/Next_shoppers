// store.js
import { configureStore } from '@reduxjs/toolkit';
import centralReducer from '../slices/centralSlice';

export default configureStore({
  reducer: {
    central: centralReducer,
  },
});
