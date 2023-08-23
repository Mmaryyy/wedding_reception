import {
  ModalBack,
  ModalBtn,
  ModalBtnWrapper,
  ModalContainer,
  ModalContent,
  ModalContentWrapper,
} from '../../styles/s-components/modal'
import React, { useEffect } from 'react'

export const Modal = ({ modalContent, callback, modalHandler, btnContent }) => {
  const disableScroll = () => {
    document.body.style.cssText = `
      top: -${window.scrollY}px;
      overflow-y: hidden;
      width: 100%;
    `
  }
  const enableScorll = () => {
    const scrollY = document.body.style.top
    document.body.style.cssText = ``
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
  }

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
