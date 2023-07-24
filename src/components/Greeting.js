import React from 'react'
import { InnerContainer, Title } from '../styles/s-components/common'
import Contact from './Contact'
const Greeting = () => {
  return (
    <InnerContainer className="contact">
      <Title>C o n t a c t</Title>
      <Contact />
    </InnerContainer>
  )
}

export default Greeting
