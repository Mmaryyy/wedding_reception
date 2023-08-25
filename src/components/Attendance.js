import * as Modal from './Modal'

import {
  BaseBtn,
  Content,
  ContentWrapper,
  DivisionLine,
  Title,
} from '../styles/s-components/common'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

export const Attendance = () => {
  const [attendanceModalOpen, setAttendanceModalOpen] = useState(false)

  const attendanceModalHandler = () => {
    setAttendanceModalOpen(!attendanceModalOpen)
  }

  const CONTENTS = [
    '귀한 발걸음 하신 분들께',
    '모자람 없이 대접하고자 합니다.',
    '참석 여부를 편히 알려주시면',
    '행사를 준비하기에',
    '큰 도움이 됩니다.',
  ]

  const DETAILS = [
    '* 인원 수는 본인을 포함한',
    <span key={'details'}>
      <strong>총 인원</strong>으로 기재해 주세요.
    </span>,
  ]

  return (
    <>
      <ContentWrapper padding={'50px 0 0 0'}>
        <Title margin={'0'}>참 석 여 부</Title>
        <DivisionLine />
        {CONTENTS.map((el, idx) => {
          return <Content key={idx}>{el}</Content>
        })}
        <div className="detail_wrapper">
          {DETAILS.map((el, idx) => {
            return (
              <Content fz={'var(--fz-xs)'} key={idx}>
                {el}
              </Content>
            )
          })}
        </div>
        <BaseBtn margin={'10px 0 0 0'} onClick={attendanceModalHandler}>
          참석 의사 전달하기
        </BaseBtn>
        <BaseBtn margin={'10px 0 0 0'} as={Link} to={'/list'}>
          (혼주 전용) 참석 명단 확인
        </BaseBtn>
      </ContentWrapper>
      {attendanceModalOpen ? (
        <Modal.Submit modalHandler={attendanceModalHandler} />
      ) : null}
    </>
  )
}
