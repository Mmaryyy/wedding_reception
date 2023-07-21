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
      const updateState = {
        ...state,
        isOpen: true,
        modalContent,
      }
      return updateState
    },
    closeModal: (state, actions) => {
      const updateState = {
        ...initialState,
      }
      return updateState
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
