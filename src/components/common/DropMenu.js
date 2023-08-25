import * as Modal from './../Modal'

import {
  DropdownLink,
  DropdownMenuItem,
  PayLogo,
} from '../../styles/s-components/dropdown'
import React, { useState } from 'react'
import { faComments, faPaste, faPhone } from '@fortawesome/free-solid-svg-icons'

import CopyToClipboard from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DropMenu = ({ menuType, idx, parent }) => {
  const COPY = 'copy'
  const SMS = 'sms'
  const TEL = 'tel'
  const PAY = 'pay'
  const typeObj = {
    forCall: [SMS, TEL],
    forPay: [COPY, PAY],
  }
  const type = typeObj[menuType][idx]
  const { name, bank, account, phoneNumber, kakaoPay } = parent
  const copyContent = `${bank} ${account}`
  const [modalOpen, setModalOpen] = useState(false)

  const onClickMenu = () => {
    setModalOpen(!modalOpen)
  }
  const MenuIcon = ({ type }) => {
    const isPayLogo = type === PAY
    const getIconSrc = () => {
      switch (type) {
        case SMS:
          return faComments
        case TEL:
          return faPhone
        case COPY:
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
          <FontAwesomeIcon
            icon={getIconSrc()}
            style={{ marginRight: '10px' }}
          />
        )}
      </>
    )
  }

  const getMenuContent = (type, copyContent) => {
    switch (type) {
      case COPY:
        return (
          <>
            <CopyToClipboard
              text={copyContent}
              style={{ color: 'inherit', cursor: 'pointer' }}
            >
              <button>계좌번호 복사</button>
            </CopyToClipboard>
          </>
        )
      case SMS:
        return '문자하기'
      case TEL:
        return '전화하기'
      case PAY:
        return '송금'
    }
  }

  // modal에 내려줄 콜백함수
  const getCallbackFn = (type) => {
    switch (type) {
      case SMS:
        return () => {
          window.location.href = `sms:${phoneNumber}`
        }
      case TEL:
        return () => {
          window.location.href = `tel:${phoneNumber}`
        }
      case PAY:
        return () => {
          window.location.href =
            'kakaotalk://kakaopay/money/to/qr?qr_code=FL6gWfIsD'
        }
      case COPY:
        return null
      default:
        return null
    }
  }

  const getModalContent = (type) => {
    switch (type) {
      case COPY:
        return (
          <>
            <p>혼주 {name}님의 계좌번호</p>
            <p>
              <strong>{copyContent}</strong> 가
            </p>
            <p>복사되었습니다.</p>
            <p> 필요한 곳에 붙여 넣어 사용하세요.</p>
          </>
        )
      case SMS:
        return (
          <>
            <p>혼주 {name}님에게</p>
            <p>문자를 전송합니다.</p>
            <p>메시지 전송 창으로 이동합니다.</p>
          </>
        )
      case TEL:
        return (
          <>
            <p>혼주 {name}님에게</p>
            <p>전화를 합니다.</p>
            <p>축하의 마음을 전해주세요.</p>
          </>
        )

      case PAY:
        return (
          <>
            <p>혼주 {name}님에게</p>
            <p>축하의 마음을 전달하실 수 있도록</p>
            <p>카카오페이 앱으로 이동합니다.</p>
          </>
        )
      default:
        return ''
    }
  }

  return (
    <>
      {modalOpen ? (
        <Modal.Default
          modalContent={getModalContent(type)}
          callback={getCallbackFn(type)}
          modalHandler={onClickMenu}
        />
      ) : null}
      <DropdownMenuItem>
        {type === PAY && !kakaoPay ? null : (
          <DropdownLink to={() => false} onClick={onClickMenu}>
            <MenuIcon type={type} />
            {getMenuContent(type, copyContent)}
          </DropdownLink>
        )}
      </DropdownMenuItem>
    </>
  )
}

export default DropMenu
