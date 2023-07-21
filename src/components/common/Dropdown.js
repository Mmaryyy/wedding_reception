// /* eslint-disable */
import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {
  DropdownContainer,
  DropdownBtn,
  DropdownMenuContainer,
} from '../../styles/s-components/dropdown'
// import { openModal } from '../../store/modalSlice'
import DropMenu from './DropMenu'

const Dropdown = ({ isCall, parent }) => {
  // const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const dropHandler = () => {
    return setIsOpen(!isOpen)
  }

  // const copyContent = `${bank} ${account}`

  // const onClickDropMenu = async (type, callbackFn) => {
  //   let content = ''
  //   if (type === 'account') {
  //     content = `혼주 ${name}님의 계좌번호 ${copyContent}가 복사되었습니다. 필요한 곳에 붙여넣어 사용하세요.`
  //   } else if (type === 'message') {
  //     content = `혼주 ${name}님에게 문자를 전송합니다. 메시지 전송 창으로 이동합니다.`
  //   } else if (type === 'call') {
  //     content = `혼주 ${name}님에게 전화를 합니다. 축하의 마음을 전해주세요.`
  //   }
  //   const modalContent = {
  //     modalContent: content,
  //   }
  //   dispatch(openModal(modalContent))
  //   await callbackFn()
  // }

  return (
    <DropdownContainer
      className={`wrapper ${isOpen ? 'clicked' : null}`}
      isOpen={isOpen}
    >
      <DropdownBtn className="title" isOpen={isOpen} onClick={dropHandler}>
        {isCall ? '축하 인사 전하기' : '마음 전하실 곳'}
        <FontAwesomeIcon
          icon={faChevronDown}
          rotation={isOpen ? 0 : 180}
          style={{ color: 'var(--pink-100)', marginLeft: '10px' }}
        />
      </DropdownBtn>
      <DropdownMenuContainer className="menu_wrapper" isOpen={isOpen}>
        <DropMenu isCall={isCall} parent={parent} />
      </DropdownMenuContainer>
    </DropdownContainer>
  )
}

export default Dropdown
