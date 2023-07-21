import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import parentsReducer from './parentsSlice'

const rootReducer = {
  modal: modalReducer,
  parents: parentsReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})
