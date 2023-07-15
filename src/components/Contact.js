import React from 'react'
import { Content } from '../styles/s-components/common'
import { ContactWrapper, DropdownWrapper } from '../styles/s-components/contact'
import Dropdown from './Dropdown'

const Contact = () => {
  const daddy = {
    name: '이 춘 홍',
    phoneNumber: '01086253548',
    bank: '농협',
    account: '601145-52-134819',
  }
  const mommy = {
    name: '김 순 덕',
    phoneNumber: '01071743548',
    bank: '국민',
    account: '766101-01-616129',
  }

  return (
    <>
      <ContactWrapper className="daddy">
        <Content className="strong">{daddy.name}</Content>
        <DropdownWrapper className="dropdown_wrapper">
          <Dropdown isForCalling={true} info={daddy} />
          <Dropdown isForCalling={false} info={daddy} />
        </DropdownWrapper>
      </ContactWrapper>
      <ContactWrapper className="mommy">
        <Content className="strong">{mommy.name}</Content>
        <DropdownWrapper className="dropdown_wrapper">
          <Dropdown isForCalling={true} info={mommy} />
          <Dropdown isForCalling={false} info={mommy} />
        </DropdownWrapper>
      </ContactWrapper>
    </>
  )
}

export default Contact
