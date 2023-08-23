import {
  BaseInput,
  BaseLabel,
  InputWrapper,
} from '../../styles/s-components/common'

import React from 'react'

export const InputText = ({ label, id, placeholder, ...rest }) => {
  const { value, onChange } = rest
  return (
    <InputWrapper className={`input_${id}`}>
      <BaseLabel htmlFor={`input_${id}`}>{label}</BaseLabel>
      <BaseInput
        type="text"
        id={`input_${id}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  )
}
