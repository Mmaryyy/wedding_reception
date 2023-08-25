import {
  ModalBack,
  ModalBtn,
  ModalBtnWrapper,
  ModalCloseBtn,
  ModalContainer,
  ModalContent,
  ModalContentWrapper,
} from '../../styles/s-components/modal'
import React, { useEffect } from 'react'
import { disableScroll, enableScorll } from './../../utils/scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const Modal = ({ modalContent, callback, modalHandler, btnContent }) => {
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
        <ModalCloseBtn onClick={closeModalHandler}>
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </ModalCloseBtn>
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
