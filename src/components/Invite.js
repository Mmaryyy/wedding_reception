import React from 'react'
import {
  DivisionLine,
  ContentWrapper,
  Title,
  Content,
} from '../styles/s-components/common'

const Invite = () => {
  const comments = [
    '본식에 초대하지 못하는',
    '죄송한 마음을 담아,',
    '따로 작은 피로연 자리를 마련하였습니다.',
    '자리에 참석하시어',
    '저희 딸과 사위의 앞날을 축복해주시면',
    '더 큰 기쁨과 격려가 되겠습니다.',
  ]

  return (
    <ContentWrapper padding={'50px 0'}>
      <Title>피로연에 초대합니다.</Title>
      <DivisionLine />
      {comments.map((el, idx) => {
        return (
          <Content key={`comment${idx + 1}`} fz={`var(--fz-big)`}>
            {el}
          </Content>
        )
      })}
    </ContentWrapper>
  )
}

export default Invite
