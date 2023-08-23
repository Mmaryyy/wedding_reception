/* eslint-disable */
import * as Modal from './Modal'

import {
  BaseBtn,
  Content,
  ContentWrapper,
  DivisionLine,
  Title,
} from '../styles/s-components/common'
import React, { useState } from 'react'

const Attendance = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const onClickModalBtn = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <ContentWrapper padding={'50px 0'}>
        <Title margin={'0'}>참 석 여 부</Title>
        <DivisionLine />
        <Content>귀한 발걸음 하신 분들께</Content>
        <Content>모자람 없이 대접하고자 합니다.</Content>
        <Content>참석 여부를 편히 알려주시면</Content>
        <Content>행사를 준비하기에</Content>
        <Content>큰 도움이 됩니다.</Content>
        <div className="detail_wrapper">
          <Content fz={'var(--fz-xs)'}>* 인원 수는 본인을 포함한</Content>
          <Content fz={'var(--fz-xs)'}>
            <strong>총 인원</strong>으로 기재해 주세요.
          </Content>
        </div>
      </ContentWrapper>
      <BaseBtn onClick={onClickModalBtn}>참석 의사 전달하기</BaseBtn>
      {modalOpen ? (
        <Modal.Submit modalContent={''} modalHandler={onClickModalBtn} />
      ) : null}
    </>
  )
}

export default Attendance
