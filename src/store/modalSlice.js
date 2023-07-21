import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalContent: '',
  isOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, actions) => {
      const { modalContent } = actions.payload
      state.modalContent = modalContent
      state.isOpen = true
    },
    closeModal: (state, actions) => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
