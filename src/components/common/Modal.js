import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ModalContainer,
  ModalBack,
  ModalContentWrapper,
  ModalContent,
  ModalBtnWrapper,
  ModalBtn,
} from '../../styles/s-components/modal'
import { closeModal } from '../../store/modalSlice'

const Modal = () => {
  const dispatch = useDispatch
  const { isOpen, modalContent } = useSelector((state) => state.modal)
  const handleModalClose = () => {
    dispatch(closeModal())
  }
  return (
    <>
      {isOpen ? (
        <ModalContainer>
          <ModalBack onClick={handleModalClose} />
          <ModalContentWrapper>
            <ModalContent>{modalContent}</ModalContent>
            <ModalBtnWrapper>
              <ModalBtn onClick={handleModalClose}>취소</ModalBtn>
              <ModalBtn onClick={handleModalClose}>확인</ModalBtn>
            </ModalBtnWrapper>
          </ModalContentWrapper>
        </ModalContainer>
      ) : null}
    </>
  )
}

export default Modal
