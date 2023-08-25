import {
  ModalBack,
  ModalBtn,
  ModalBtnWrapper,
  ModalContainer,
  ModalContent,
  ModalContentWrapper,
} from '../../styles/s-components/modal'
import React, { useEffect } from 'react'
import { disableScroll, enableScorll } from './../../utils/scroll'

import ModalCloseBtn from '../common/ModalCloseBtn'

export const Modal = ({ modalContent, callback, modalHandler }) => {
  useEffect(() => {
    disableScroll()
    return () => enableScorll()
  }, [])

  const closeModalHandler = (e) => {
    e.stopPropagation()
    modalHandler()
  }

  const confirmModalHandler = (e) => {
    closeModalHandler(e)
    setTimeout(() => callback(), 500)
  }

  return (
    <ModalContainer className="modal_container">
      <ModalBack onClick={closeModalHandler} className="modal_back" />
      <ModalContentWrapper>
        <ModalCloseBtn modalHandler={closeModalHandler} />
        <ModalContent>{modalContent}</ModalContent>
        {callback ? (
          <ModalBtnWrapper>
            <ModalBtn onClick={closeModalHandler}>취소</ModalBtn>
            <ModalBtn onClick={confirmModalHandler}>확인</ModalBtn>
          </ModalBtnWrapper>
        ) : (
          <ModalBtn onClick={closeModalHandler}>확인</ModalBtn>
        )}
      </ModalContentWrapper>
    </ModalContainer>
  )
}
