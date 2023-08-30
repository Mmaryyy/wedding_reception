import * as Modal from './Modal'

import {
  BaseBtn,
  BtnWrapper,
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

  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const updateModalHandler = () => {
    setUpdateModalOpen(!updateModalOpen)
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

  const MODALCONTENTS = [
    '먼 길 오시는 걸음,',
    '모자람 없이 대접할 수 있도록',
    '참석 의사를 미리 말씀해주세요.',
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
        <BtnWrapper className="button_wrapper">
          <BaseBtn margin={'10px 5px 0 0'} onClick={attendanceModalHandler}>
            참석 의사 전달하기
          </BaseBtn>
          <BaseBtn margin={'10px 0 0 0'} onClick={updateModalHandler}>
            참석 내용 수정하기
          </BaseBtn>
        </BtnWrapper>
        <BaseBtn margin={'10px 0 0 0'} as={Link} to={'/list'}>
          (혼주 전용) 참석 명단 확인
        </BaseBtn>
      </ContentWrapper>
      {attendanceModalOpen ? (
        <Modal.Submit
          modalTitle={'참석 여부 입력하기'}
          modalContents={MODALCONTENTS}
          modalHandler={attendanceModalHandler}
        />
      ) : null}
      {updateModalOpen ? (
        <Modal.Update
          modalTitle={'참석 여부 수정하기'}
          modalHandler={updateModalHandler}
        />
      ) : null}
    </>
  )
}
