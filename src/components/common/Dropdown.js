import {
  DropdownBtn,
  DropdownContainer,
  DropdownMenuList,
} from '../../styles/s-components/dropdown'
import React, { useState } from 'react'

import DropMenu from './DropMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({ type, parent }) => {
  const [dropIsOpen, setDropIsOpen] = useState(true)
  const onClickDropdownBtn = () => {
    setDropIsOpen(!dropIsOpen)
  }
  const dropMenu = new Array(2).fill(0)
  return (
    <DropdownContainer>
      <DropdownBtn onClick={onClickDropdownBtn} isOpen={dropIsOpen}>
        {type === 'forCall' ? '축하 인사 전하기 ' : '마음 전하실 곳 '}
        <FontAwesomeIcon icon={faChevronDown} rotation={dropIsOpen ? 0 : 180} />
      </DropdownBtn>
      <DropdownMenuList isOpen={dropIsOpen}>
        {dropMenu.map((el, idx) => {
          return (
            <DropMenu menuType={type} idx={idx} key={idx} parent={parent} />
          )
        })}
      </DropdownMenuList>
    </DropdownContainer>
  )
}

export default Dropdown
