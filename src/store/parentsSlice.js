import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    role: 'daddy',
    name: '이춘홍',
    phoneNumber: '01086253548',
    bank: '농협',
    account: '601145-52-134819',
    kakaoPay: false,
    label: '父측',
  },
  {
    role: 'mommy',
    name: '김순덕',
    phoneNumber: '01071743548',
    bank: '국민',
    account: '766101-01-616129',
    kakaoPay: true,
    label: '母측',
  },
]

export const parentsSlice = createSlice({
  name: 'parents',
  initialState,
})

export default parentsSlice.reducer
