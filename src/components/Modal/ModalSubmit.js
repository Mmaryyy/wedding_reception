import * as Input from './../Input'

import { Content, Title } from '../../styles/s-components/common'
import {
  ModalBack,
  ModalBtn,
  ModalBtnWrapper,
  ModalCloseBtn,
  ModalContainer,
  ModalContent,
  ModalContentWrapper,
  ModalInputWrapper,
} from '../../styles/s-components/modal'
import React, { useEffect } from 'react'
import { disableScroll, enableScorll } from './../../utils/scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { firestore } from '../../firebase'
import useInput from '../../utils/useInput'
import { useSelector } from 'react-redux'

export const ModalSubmit = ({ modalHandler }) => {
  const contents = [
    '먼 길 오시는 걸음,',
    '모자람 없이 대접할 수 있도록',
    '참석 의사를 미리 말씀해주세요.',
  ]
  const parents = useSelector((state) => state.parents)
  const name = useInput('')
  const totalPeople = useInput('default')
  const selectedParents = useInput('daddy')
  const password = useInput('')

  const peopleOption = new Array(10).fill(1)

  useEffect(() => {
    disableScroll()
    return () => enableScorll()
  }, [])

  const closeModalHandler = (e) => {
    e.stopPropagation()
    modalHandler()
  }

  const submitData = (data) => {
    const db = firestore.collection('attendance')
    db.doc(data?.name).set(data)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const data = {
      name: name.value,
      selectedParents: selectedParents.value,
      totalPeople: totalPeople.value,
      password: password.value,
    }
    // submit 할 데이터 받아서 firestore 전송하기
    submitData(data)
    closeModalHandler(e)
  }

  return (
    <ModalContainer className="modal_container" as="form">
      <ModalBack onClick={closeModalHandler} className="modal_back" />
      <ModalContentWrapper>
        <ModalCloseBtn onClick={closeModalHandler}>
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </ModalCloseBtn>
        <ModalContent>
          <Title margin={'20px 0'}>참석여부 입력하기</Title>
          {contents.map((el, idx) => {
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
              label={'비밀번호'}
              placeholder={'추후 내용 확인/수정 용도로 사용됩니다.'}
              {...password}
            />
          </ModalInputWrapper>
        </ModalContent>
        <ModalBtnWrapper>
          <ModalBtn onClick={closeModalHandler}>취소</ModalBtn>
          <ModalBtn type="submit" onClick={submitHandler}>
            제출
          </ModalBtn>
        </ModalBtnWrapper>
      </ModalContentWrapper>
    </ModalContainer>
  )
}
