import {
  Content,
  ContentWrapper,
  DivisionLine,
} from '../styles/s-components/common'

import React from 'react'

const Intro = () => {
  return (
    <>
      <ContentWrapper padding={'20px 0'}>
        <Content>2023년 10월 7일 12시</Content>
        <Content>스타파티오 스피카홀</Content>
        <Content fz={`var(--fz-base)`}>
          광주 KS병원 맞은편, 한듬레포츠 2층
        </Content>
        <DivisionLine />
        <Content>혼주 : 이춘홍, 김순덕</Content>
        <Content>신랑, 신부 : 배재성, 이혜인</Content>
      </ContentWrapper>
    </>
  )
}

export default Intro
