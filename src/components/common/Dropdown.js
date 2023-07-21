import {
  DropdownBtn,
  DropdownContainer,
  DropdownMenuContainer,
} from '../../styles/s-components/dropdown'
import React, { useState } from 'react'

import DropMenu from './DropMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({ isCall, parent }) => {
  const [isOpen, setIsOpen] = useState(true)
  const dropHandler = () => {
    return setIsOpen(!isOpen)
  }

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
