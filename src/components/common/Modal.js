/* eslint-disable */
import {
  ModalBack,
  ModalBtn,
  ModalBtnWrapper,
  ModalContainer,
  ModalContent,
  ModalContentWrapper,
} from '../../styles/s-components/modal'
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { closeModal } from '../../store/modalSlice'

const Modal = () => {
  const dispatch = useDispatch()
  const { modalContent } = useSelector((state) => state.modal)
  const closeModalHandler = (e) => {
    e.stopPropagation()
    dispatch(closeModal())
  }
  return (
    <>
      <ModalContainer>
        <ModalBack onClick={closeModalHandler} />
        <ModalContentWrapper>
          <ModalContent>{modalContent}</ModalContent>
          <ModalBtnWrapper>
            <ModalBtn onClick={closeModalHandler}>취소</ModalBtn>
            <ModalBtn onClick={closeModalHandler}>확인</ModalBtn>
          </ModalBtnWrapper>
        </ModalContentWrapper>
      </ModalContainer>
    </>
  )
}

export default Modal
