/* eslint-disable */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faComments,
  faPhone,
  faPaste,
} from '@fortawesome/free-solid-svg-icons'
import {
  DropdownContainer,
  DropdownBtn,
  DropdownMenuContainer,
  DropdownMenuWrapper,
  DropdownMenu,
  PayLogo,
} from '../styles/s-components/dropdown'

const Dropdown = ({ isForCalling, info }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropHandler = () => {
    return setIsOpen(!isOpen)
  }
  const { parent, phoneNumber, bank, account } = info
  const copyContent = `${bank} ${account}`
  const copyHandler = async () => {
    try {
      navigator.clipboard.writeText(copyContent)
    } catch (error) {
      if (error) {
        const clipboard = new ClipboardJS('.copy')
        clipboard.on('success', (e) => {
          e.clearSelection()
        })
        clipboard.on('error', (e) => {})
      }
    }
  }
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
            <DropdownMenu to={`sms:${phoneNumber}`}>
              <FontAwesomeIcon
                icon={faComments}
                style={{ marginRight: '10px' }}
              />
              문자하기
            </DropdownMenu>
          ) : (
            <DropdownMenu
              as={'button'}
              onClick={copyHandler}
              className="copy"
              data-clipboard-text={`${copyContent}`}
            >
              <FontAwesomeIcon icon={faPaste} style={{ marginRight: '10px' }} />
              계좌번호 복사
            </DropdownMenu>
          )}
        </DropdownMenuWrapper>
        <DropdownMenuWrapper isLast={true}>
          {isForCalling ? (
            <DropdownMenu to={`tel:${phoneNumber}`}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
              전화하기
            </DropdownMenu>
          ) : parent === 'mommy' ? (
            <DropdownMenu
              to="kakaotalk://kakaopay/money/to/qr?qr_code=FL6gWfIsD"
              target="_blank"
            >
              <PayLogo
                src="/assets/kakaopay_CI_logotype.png"
                alt="로고 이미지"
              />
              송금
            </DropdownMenu>
          ) : (
            <DropdownMenu />
          )}
        </DropdownMenuWrapper>
      </DropdownMenuContainer>
    </DropdownContainer>
  )
}

export default Dropdown
