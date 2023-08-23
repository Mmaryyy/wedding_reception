import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  totalPeople: 0,
  seletedParent: '',
}

export const submitSlice = createSlice({
  name: 'submitData',
  initialState,
})

export default submitSlice.reducer
