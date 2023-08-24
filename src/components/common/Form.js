/* eslint-disable */
import * as Input from '../Input'

import { Content, Title } from '../../styles/s-components/common'

import { FormContainer } from '../../styles/s-components/form'
import React from 'react'
import useInput from '../../utils/useInput'
import { useSelector } from 'react-redux'

const Form = () => {
  const contents = [
    '먼 길 오시는 걸음,',
    '모자람 없이 대접할 수 있도록',
    '참석 의사를 미리 말씀해주세요.',
  ]
  const parents = useSelector((state) => state.parents)
  const name = useInput('')
  const password = useInput('')
  const selectedParents = useInput('daddy')
  const totalPeople = useInput('default')

  const peopleOption = new Array(10).fill(1)

  const submitData = (e) => {
    e.preventDefault()

    const data = {
      name: name.value,
      selectedParents: selectedParents.value,
      totalPeople: totalPeople.value,
      password: password.value,
    }

    console.log(data)
  }

  return (
    <FormContainer>
      <Title>참석여부 입력하기</Title>
      {contents.map((el, idx) => {
        return <Content key={idx}>{el}</Content>
      })}
      <Input.Text
        id={'name'}
        label={'참석자 성함'}
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
        id={'totalPeople'}
        label={'참석 인원'}
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
    </FormContainer>
  )
}

export default Form
