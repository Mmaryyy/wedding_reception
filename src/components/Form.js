/* eslint-disable */

import {
  BaseInput,
  BaseLabel,
  Content,
  CustomFieldset,
  InputWrapper,
  RadioBtn,
  RadioLabel,
  RadioWrapper,
  Title,
} from '../styles/s-components/common'
import React, { useState } from 'react'

import { FormContainer } from '../styles/s-components/form'
import useInput from '../utils/useInput'
import useRadioInput from '../utils/useRadioInput'

const Form = () => {
  const PARENTS = ['父측,daddy', '母측,mommy']
  const contents = [
    '먼 길 오시는 걸음,',
    '모자람 없이 대접할 수 있도록',
    '참석 의사를 미리 말씀해주세요.',
  ]
  const name = useInput('')

  const [selectedParent, setSelectedParent] = useState('daddy')
  const handleRadio = (e) => {
    setSelectedParent(e.target.value)
  }

  return (
    <FormContainer>
      <Title>참석여부 입력하기</Title>
      {contents.map((el, idx) => {
        return <Content key={idx}>{el}</Content>
      })}
      <InputWrapper>
        <BaseLabel htmlFor="inputName">참석자 성함</BaseLabel>
        <BaseInput
          type="text"
          id="inputName"
          placeholder="성함을 입력해 주세요."
          {...name}
        />
      </InputWrapper>
      <InputWrapper>
        <CustomFieldset>
          <BaseLabel as="legend">구분</BaseLabel>
          <RadioWrapper className="radio_wrapper">
            {PARENTS.map((parent, idx) => {
              const [label, content] = parent.split(',')
              return (
                <div className={`radio_${content}`} key={idx}>
                  <RadioLabel
                    htmlFor={`radio_${content}`}
                    isChecked={selectedParent === content}
                  >
                    {label}
                  </RadioLabel>
                  <RadioBtn
                    type="radio"
                    id={`radio_${content}`}
                    value={content}
                    name="parents"
                    checked={selectedParent === content}
                    onChange={handleRadio}
                  />
                </div>
              )
            })}
          </RadioWrapper>
        </CustomFieldset>
      </InputWrapper>
      <InputWrapper>
        <BaseLabel htmlFor="inputName">참석 인원</BaseLabel>
        <select type="text" id="inputName"></select>
      </InputWrapper>
    </FormContainer>
  )
}

export default Form
