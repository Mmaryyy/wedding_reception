import React from 'react'
import { ContentWrapper, Content } from '../styles/s-components/common'

const Intro = () => {
  return (
    <ContentWrapper padding={'20px 0'}>
      <Content fz={`var(--fz-big)`}>혼주 : 이춘홍, 김순덕</Content>
      <Content fz={`var(--fz-big)`}>신랑, 신부 : 배재성, 이혜인</Content>
    </ContentWrapper>
  )
}

export default Intro
