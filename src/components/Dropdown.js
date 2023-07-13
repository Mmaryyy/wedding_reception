/* eslint-disable */
import React, { useState } from 'react'
import {
  DropdownContainer,
  DropdownBtn,
  DropdownMenuContainer,
  DropdownMenuWrapper,
  DropdownMenu,
} from '../styles/s-components/dropdown'

const Dropdown = ({ phoneNumber }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropHandler = () => {
    return setIsOpen(!isOpen)
  }
  return (
    <DropdownContainer className="wrapper">
      <DropdownBtn className="title" isOpen={isOpen} onClick={dropHandler}>
        축하하기
      </DropdownBtn>
      <DropdownMenuContainer className="menu_wrapper" isOpen={isOpen}>
        <DropdownMenuWrapper>
          <DropdownMenu href={`sms:${phoneNumber}`}>문자</DropdownMenu>
        </DropdownMenuWrapper>
        <DropdownMenuWrapper>
          <DropdownMenu href={`tel:${phoneNumber}`} isLast={true}>
            전화
          </DropdownMenu>
        </DropdownMenuWrapper>
      </DropdownMenuContainer>
    </DropdownContainer>
  )
}

export default Dropdown
