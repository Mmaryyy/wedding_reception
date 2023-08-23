import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  totalPeople: 0,
  seletedParent: '',
}

export const contentsSlice = createSlice({
  name: 'contents',
  initialState,
})

export default contentsSlice.reducer
