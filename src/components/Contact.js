import React from 'react'
import { Content } from '../styles/s-components/common'
import { ContactWrapper, DropdownWrapper } from '../styles/s-components/contact'
import Dropdown from './Dropdown'

const Contact = () => {
  const parents = [
    {
      parent: 'daddy',
      name: '이 춘 홍',
      phoneNumber: '01086253548',
      bank: '농협',
      account: '601145-52-134819',
    },
    {
      parent: 'mommy',
      name: '김 순 덕',
      phoneNumber: '01071743548',
      bank: '국민',
      account: '766101-01-616129',
    },
  ]

  return (
    <>
      {parents.map((el, idx) => {
        return (
          <ContactWrapper className={`${el.parent}`} key={idx}>
            <Content className="strong" color="var(--gold-400)">
              {el.name}
            </Content>
            <DropdownWrapper className="dropdown_wrapper">
              <Dropdown isForCalling={true} info={el} />
              <Dropdown isForCalling={false} info={el} />
            </DropdownWrapper>
          </ContactWrapper>
        )
      })}
    </>
  )
}

export default Contact
