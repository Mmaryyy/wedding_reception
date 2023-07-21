import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  DropdownMenuWrapper,
  DropdownMenu,
  PayLogo,
} from '../../styles/s-components/dropdown'
import { faComments, faPhone, faPaste } from '@fortawesome/free-solid-svg-icons'
import CopyToClipboard from 'react-copy-to-clipboard'

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
  const { bank, account, phoneNumber, kakaoPay } = parent
  const copyContent = `${bank} ${account}`
  return (
    <>
      <DropdownMenuWrapper>
        {isCall ? (
          <DropdownMenu to={`sms:${phoneNumber}`}>
            <MenuIcon type={'sms'} />
            문자하기
          </DropdownMenu>
        ) : (
          <DropdownMenu className="copy">
            <MenuIcon type={'copy'} />
            <CopyClipboard copyContent={copyContent} />
          </DropdownMenu>
        )}
      </DropdownMenuWrapper>
      <DropdownMenuWrapper isLast={true}>
        {isCall ? (
          <DropdownMenu to={`tel:${phoneNumber}`}>
            <MenuIcon type={'tel'} />
            전화하기
          </DropdownMenu>
        ) : kakaoPay ? (
          <DropdownMenu
            to="kakaotalk://kakaopay/money/to/qr?qr_code=FL6gWfIsD"
            target="_blank"
          >
            <MenuIcon type={'pay'} /> 송금
          </DropdownMenu>
        ) : (
          <DropdownMenu />
        )}
      </DropdownMenuWrapper>
    </>
  )
}

export default DropMenu
