import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '../slices/uiSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
