import {
  BaseInput,
  BaseLabel,
  InputWrapper,
} from '../../styles/s-components/common'

import React from 'react'

export const InputPassword = ({
  id,
  label,
  placeholder,
  minLength,
  maxLength,
  value,
  onChange,
  ...rest
}) => {
  return (
    <InputWrapper className={`input_${id}`}>
      <BaseLabel htmlFor={`input_${id}`}>{label}</BaseLabel>
      <BaseInput
        type="password"
        id={`input_${id}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        required
        {...rest}
      />
    </InputWrapper>
  )
}
