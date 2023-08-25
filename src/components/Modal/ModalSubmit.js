import * as Input from './../Input'

import { Content, Title } from '../../styles/s-components/common'
import {
  ModalBack,
  ModalBtn,
  ModalBtnWrapper,
  ModalContainer,
  ModalContent,
  ModalContentWrapper,
  ModalInputWrapper,
  Warning,
} from '../../styles/s-components/modal'
import React, { useEffect, useState } from 'react'
import { disableScroll, enableScorll } from './../../utils/scroll'

import { Alert } from './../../components'
import ModalCloseBtn from '../common/ModalCloseBtn'
import { firestore } from '../../firebase'
import useInput from '../../utils/useInput'
import { useSelector } from 'react-redux'

export const ModalSubmit = ({ modalTitle, modalContents, modalHandler }) => {
  const parents = useSelector((state) => state.parents)
  const name = useInput('')
  const totalPeople = useInput('default')
  const selectedParents = useInput('daddy')
  const phoneNumber = useInput('')

  const peopleOption = new Array(10).fill(1)

  const [validation, setValidation] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    disableScroll()
    return () => enableScorll()
  }, [])

  const submitData = (data) => {
    const db = firestore.collection('attendance')
    db.doc(data?.name).set(data)
    setIsComplete(true)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      name: name.value,
      selectedParents: selectedParents.value,
      totalPeople: Number(totalPeople.value),
      phoneNumber: Number(phoneNumber.value),
    }
    // submit 할 데이터 받아서 firestore 전송하기
    if (Object.values(data).indexOf('') === -1) {
      setValidation(true)
      submitData(data)
      return
    }
    // 빈 데이터가 있을 때 핸들링 -> 안내 문구 나타나기
    setValidation(false)
  }

  return (
    <ModalContainer className="modal_container" as="form">
      <ModalBack onClick={modalHandler} className="modal_back" />
      {isComplete ? (
        <Alert callback={modalHandler} contents={'제출이 완료되었습니다.'} />
      ) : (
        <ModalContentWrapper>
          <ModalCloseBtn modalHandler={modalHandler} />
          <ModalContent>
            <Title margin={'20px 0'}>{modalTitle}</Title>
            {modalContents.map((el, idx) => {
              return <Content key={idx}>{el}</Content>
            })}
            <ModalInputWrapper>
              <Input.Text
                label={'참석자 성함'}
                id={'inputName'}
                placeholder={'성함을 입력해 주세요.'}
                {...name}
              />
              <Input.Radio
                id={'parents'}
                label={'구분'}
                radioArr={parents}
                {...selectedParents}
              />
              <Input.Select
                label={'참석 인원'}
                id={'totalPeople'}
                selectOption={peopleOption}
                defaultValue={'본인을 포함한 총 인원을 선택해 주세요.'}
                {...totalPeople}
              />
              <Input.Password
                id={'password'}
                label={'휴대폰 뒷번호 4자리'}
                placeholder={'추후 내용 확인/수정 용도로 사용됩니다.'}
                maxLength={4}
                {...phoneNumber}
              />
            </ModalInputWrapper>
            {validation ? (
              <Warning>** 빈 칸을 모두 채워주세요. **</Warning>
            ) : null}
          </ModalContent>
          <ModalBtnWrapper>
            <ModalBtn onClick={modalHandler}>취소</ModalBtn>
            <ModalBtn type="submit" onClick={submitHandler}>
              제출
            </ModalBtn>
          </ModalBtnWrapper>
        </ModalContentWrapper>
      )}
    </ModalContainer>
  )
}
