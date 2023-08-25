import { ContactWrapper, DropdownWrapper } from '../styles/s-components/contact'
import { Content, InnerContainer, Title } from '../styles/s-components/common'

import Dropdown from './common/Dropdown'
import React from 'react'
import { useSelector } from 'react-redux'

export const Contact = () => {
  const count = Object.keys(useSelector((state) => state.parents))
  const parents = useSelector((state) => state.parents)
  const dropdownContent = ['forCall', 'forPay']

  return (
    <InnerContainer>
      <Title>C o n t a c t</Title>
      {count.map((el, idx) => {
        const parent = parents[el]
        return (
          <ContactWrapper className={`${el}_dropdown`} key={idx}>
            <Content className="strong" color="var(--gold-400)">
              {parent.name}
            </Content>
            <DropdownWrapper>
              {dropdownContent.map((el, idx) => {
                return <Dropdown key={idx} parent={parent} type={el} />
              })}
            </DropdownWrapper>
          </ContactWrapper>
        )
      })}
    </InnerContainer>
  )
}
