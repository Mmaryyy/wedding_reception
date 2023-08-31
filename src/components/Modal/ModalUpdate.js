import * as Input from './../Input'

import {
  BaseBtn,
  Content,
  InputWrapper,
  Title,
} from '../../styles/s-components/common'
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

export const ModalUpdate = ({
  modalTitle,
  modalContents = [],
  modalHandler,
}) => {
  const parents = useSelector((state) => state.parents)
  const peopleOption = new Array(10).fill(1)

  const [defaultData, setDefaultData] = useState({
    docId: '',
    name: '',
    totalPeople: 'default',
    selectedParents: 'daddy',
    password: '',
  })
  const [isComplete, setIsComplete] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [validation, setValidation] = useState(true)
  const [warningContent, setWarningContent] = useState(
    '** 빈 칸을 모두 채워주세요 **'
  )
  // update input create
  const name = useInput(defaultData.name)
  const totalPeople = useInput(defaultData.totalPeople)
  const selectedParents = useInput(defaultData.selectedParents)
  const password = useInput(defaultData.password)

  // login input create
  const loginId = useInput('')
  const loginPw = useInput('')

  useEffect(() => {
    disableScroll()
    return () => enableScorll()
  }, [])

  const updateData = (data) => {
    const db = firestore.collection('attendance')
    db.doc(defaultData.docId).set(data)
    setIsComplete(true)
  }

  const updateHandler = (e) => {
    e.preventDefault()
    const data = {
      name: name.value,
      selectedParents: selectedParents.value,
      totalPeople: Number(totalPeople.value),
      password: password.value,
    }
    // submit 할 데이터 받아서 firestore 전송하기
    if (Object.values(data).indexOf('') === -1) {
      setValidation(true)
      updateData(data)
      return
    }
    // 빈 데이터가 있을 때 핸들링 -> 안내 문구 나타나기
    setValidation(false)
  }

  // where query 중복으로 같은 name - password 가 있는지 확인 -> 로그인 대체
  const compareUserInfo = async (e, id, password) => {
    const collectionRef = firestore.collection('attendance')
    const isCorrectUserInfo = await collectionRef
      .where('name', '==', id)
      .where('password', '==', password)
      .get()
    return !isCorrectUserInfo.empty
  }

  const getData = async (id, password) => {
    const collectionRef = firestore.collection('attendance')
    const snapshot = await collectionRef
      .where('name', '==', id)
      .where('password', '==', password)
      .get()

    snapshot.forEach((doc) => {
      const docId = doc.id
      const data = doc.data()
      setDefaultData({ docId, ...data })
    })
  }

  const loginHandler = async (e, id, password) => {
    e.preventDefault()
    const isCorrectUser = await compareUserInfo(e, id, password)
    // 빈 data 핸들링
    if (!id || !password) {
      setValidation(false)
      return
    }
    if (!isCorrectUser) {
      setWarningContent('계정 정보가 유효하지 않습니다.')
      setValidation(false)
      return
    }
    if (isCorrectUser) {
      getData(id, password)
      setIsLogin(true)
      setValidation(true)
    }
  }

  return (
    <ModalContainer className="modal_container">
      <ModalBack onClick={modalHandler} className="modal_back" />
      {isComplete ? (
        <Alert callback={modalHandler} contents={'제출이 완료되었습니다.'} />
      ) : (
        <ModalContentWrapper as="form">
          <ModalCloseBtn modalHandler={modalHandler} />
          <ModalContent>
            <Title margin={'20px 0'}>{modalTitle}</Title>
            {modalContents.map((el, idx) => {
              return <Content key={idx}>{el}</Content>
            })}
            {!isLogin ? (
              <InputWrapper className="login_input_wrapper">
                <Input.Text
                  label={'성함'}
                  id={'id'}
                  placeholder={'성함을 입력해 주세요.'}
                  {...loginId}
                />
                <Input.Password
                  label={'휴대폰 뒷번호 4자리'}
                  id={'password'}
                  placeholder={'휴대폰 번호 뒤 네자리를 입력해 주세요.'}
                  {...loginPw}
                />
              </InputWrapper>
            ) : (
              <ModalInputWrapper className="update_form_wrapper">
                <Input.Text
                  label={'참석자 성함'}
                  id={'inputName'}
                  placeholder={'성함을 입력해 주세요.'}
                  {...name}
                  disabled={true}
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
                  {...password}
                />
              </ModalInputWrapper>
            )}
            {!validation ? <Warning>{warningContent}</Warning> : null}
          </ModalContent>
          {!isLogin ? (
            <BaseBtn
              onClick={(e) => loginHandler(e, loginId.value, loginPw.value)}
            >
              조회하기
            </BaseBtn>
          ) : (
            <ModalBtnWrapper>
              <ModalBtn onClick={modalHandler}>취소</ModalBtn>
              <ModalBtn type="submit" onClick={updateHandler}>
                제출
              </ModalBtn>
            </ModalBtnWrapper>
          )}
        </ModalContentWrapper>
      )}
    </ModalContainer>
  )
}
