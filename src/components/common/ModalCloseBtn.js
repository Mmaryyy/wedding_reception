import { CloseBtn } from '../../styles/s-components/modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ModalCloseBtn = ({ modalHandler }) => {
  return (
    <CloseBtn onClick={modalHandler}>
      <FontAwesomeIcon icon={faXmark} size="xl" />
    </CloseBtn>
  )
}

export default ModalCloseBtn
