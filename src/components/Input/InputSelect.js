import {
  BaseLabel,
  BaseSelect,
  InputWrapper,
} from '../../styles/s-components/common'

import React from 'react'

export const InputSelect = ({
  label,
  id,
  selectOption,
  defaultValue,
  ...rest
}) => {
  const { value, onChange } = rest
  return (
    <InputWrapper className={`input_select_${id}`}>
      <BaseLabel htmlFor={`input_${id}`}>{label}</BaseLabel>
      <BaseSelect value={value} onChange={onChange} id={`input_${id}`} required>
        <option value="default" key="default" className="default" disabled>
          {defaultValue}
        </option>
        {selectOption.map((el, idx) => {
          const optionValue = el + idx
          return (
            <option value={optionValue} key={optionValue}>
              {optionValue}
            </option>
          )
        })}
      </BaseSelect>
    </InputWrapper>
  )
}
