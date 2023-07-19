import React from 'react'
import { InnerWrapper, Title } from '../styles/s-components/common'
import Contact from './Contact'
const Greeting = () => {
  return (
    <InnerWrapper className="contact">
      <Title>C o n t a c t</Title>
      <Contact />
    </InnerWrapper>
  )
}

export default Greeting
