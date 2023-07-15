/* eslint-disable */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faComments,
  faPhone,
  faPaste,
  faCommentDollar,
} from '@fortawesome/free-solid-svg-icons'
import {
  DropdownContainer,
  DropdownBtn,
  DropdownMenuContainer,
  DropdownMenuWrapper,
  DropdownMenu,
} from '../styles/s-components/dropdown'

const Dropdown = ({ isForCalling, info }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropHandler = () => {
    return setIsOpen(!isOpen)
  }
  const { name, phoneNumber, bank, account } = info
  return (
    <DropdownContainer
      className={`wrapper ${isOpen ? 'clicked' : null}`}
      isOpen={isOpen}
    >
      <DropdownBtn className="title" isOpen={isOpen} onClick={dropHandler}>
        {isForCalling ? '축하 인사 전하기' : '마음 전하실 곳'}
        <FontAwesomeIcon
          icon={faChevronDown}
          rotation={isOpen ? 0 : 180}
          style={{ color: 'var(--pink-100)', marginLeft: '10px' }}
        />
      </DropdownBtn>
      <DropdownMenuContainer className="menu_wrapper" isOpen={isOpen}>
        <DropdownMenuWrapper>
          {isForCalling ? (
            <DropdownMenu href={`sms:${phoneNumber}`}>
              <FontAwesomeIcon
                icon={faComments}
                style={{ marginRight: '10px' }}
              />
              문자하기
            </DropdownMenu>
          ) : (
            <DropdownMenu href={`sms:${phoneNumber}`}>
              <FontAwesomeIcon icon={faPaste} style={{ marginRight: '10px' }} />
              계좌번호 복사
            </DropdownMenu>
          )}
        </DropdownMenuWrapper>
        <DropdownMenuWrapper>
          {isForCalling ? (
            <DropdownMenu href={`tel:${phoneNumber}`}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
              전화하기
            </DropdownMenu>
          ) : (
            <DropdownMenu href={`sms:${1087513545}`}>
              <FontAwesomeIcon
                icon={faCommentDollar}
                style={{ marginRight: '10px' }}
              />
              카카오페이 송금
            </DropdownMenu>
          )}
        </DropdownMenuWrapper>
      </DropdownMenuContainer>
    </DropdownContainer>
  )
}

export default Dropdown
