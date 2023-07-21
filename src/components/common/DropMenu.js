import {
  DropdownMenu,
  DropdownMenuWrapper,
  PayLogo,
} from '../../styles/s-components/dropdown'
import { faComments, faPaste, faPhone } from '@fortawesome/free-solid-svg-icons'

import CopyToClipboard from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { openModal } from '../../store/modalSlice'
import { useDispatch } from 'react-redux'

const MenuIcon = ({ type }) => {
  const isPayLogo = type === 'pay'
  const getIconSrc = () => {
    switch (type) {
      case 'sms':
        return faComments
      case 'tel':
        return faPhone
      case 'copy':
        return faPaste
      default:
        return ''
    }
  }
  return (
    <>
      {isPayLogo ? (
        <PayLogo src="/assets/kakaopay_CI_logotype.png" alt="로고 이미지" />
      ) : (
        <FontAwesomeIcon icon={getIconSrc()} style={{ marginRight: '10px' }} />
      )}
    </>
  )
}

const CopyClipboard = ({ copyContent }) => {
  return (
    <>
      <CopyToClipboard text={copyContent}>
        <button>계좌번호 복사</button>
      </CopyToClipboard>
    </>
  )
}

const DropMenu = ({ isCall, parent }) => {
  const dispatch = useDispatch()
  const COPY = 'copy'
  const SMS = 'sms'
  const TEL = 'tel'
  const PAY = 'pay'
  const { name, bank, account, phoneNumber, kakaoPay } = parent
  const copyContent = `${bank} ${account}`

  const onClickMenu = (type) => {
    const getModalContent = (type) => {
      switch (type) {
        case COPY:
          return `혼주 ${name}님의 계좌번호 ${copyContent}가 복사되었습니다. 필요한 곳에 붙여 넣어 사용하세요.`
        case SMS:
          return `혼주 ${name}님에게 문자를 전송합니다. 메시지 전송 창으로 이동합니다.`
        case TEL:
          return `혼주 ${name}님에게 전화를 합니다. 축하의 마음을 전해주세요.`
        case PAY:
          return `혼주 ${name}님에게 축하의 마음을 전달하실 수 있도록 카카오페이 앱으로 이동합니다.`
        default:
          return ''
      }
    }
    const modalContent = {
      modalContent: getModalContent(type),
    }
    dispatch(openModal(modalContent))
  }
  return (
    <>
      <DropdownMenuWrapper>
        {isCall ? (
          <DropdownMenu
            to={`sms:${phoneNumber}`}
            onClick={() => onClickMenu(SMS)}
          >
            <MenuIcon type={SMS} />
            문자하기
          </DropdownMenu>
        ) : (
          <DropdownMenu className={COPY} onClick={() => onClickMenu(COPY)}>
            <MenuIcon type={COPY} />
            <CopyClipboard copyContent={copyContent} />
          </DropdownMenu>
        )}
      </DropdownMenuWrapper>
      <DropdownMenuWrapper isLast={true}>
        {isCall ? (
          <DropdownMenu
            to={`tel:${phoneNumber}`}
            onClick={() => onClickMenu(TEL)}
          >
            <MenuIcon type={TEL} />
            전화하기
          </DropdownMenu>
        ) : kakaoPay ? (
          <DropdownMenu
            to="kakaotalk://kakaopay/money/to/qr?qr_code=FL6gWfIsD"
            target="_blank"
            onClick={() => onClickMenu(PAY)}
          >
            <MenuIcon type={PAY} /> 송금
          </DropdownMenu>
        ) : (
          <DropdownMenu />
        )}
      </DropdownMenuWrapper>
    </>
  )
}

export default DropMenu
