import React from 'react'
import { useSelector } from 'react-redux'
import { Content } from '../styles/s-components/common'
import { ContactWrapper, DropdownWrapper } from '../styles/s-components/contact'
import Dropdown from './common/Dropdown'

const Contact = () => {
  const count = Object.keys(useSelector((state) => state.parents))
  const parents = useSelector((state) => state.parents)
  return (
    <>
      {count.map((el, idx) => {
        return (
          <ContactWrapper className={`${el}`} key={idx}>
            <Content className="strong" color="var(--gold-400)">
              {parents[el].name}
            </Content>
            <DropdownWrapper>
              <Dropdown isCall={true} parent={parents[el]} />
              <Dropdown isCall={false} parent={parents[el]} />
            </DropdownWrapper>
          </ContactWrapper>
        )
      })}
    </>
  )
}

export default Contact
