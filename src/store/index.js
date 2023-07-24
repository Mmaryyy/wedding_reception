import { configureStore } from '@reduxjs/toolkit'
import parentsReducer from './parentsSlice'

const rootReducer = {
  parents: parentsReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})
