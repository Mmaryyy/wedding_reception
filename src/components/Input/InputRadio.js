import {
  BaseLabel,
  CustomFieldset,
  InputWrapper,
  RadioBtn,
  RadioLabel,
  RadioWrapper,
} from '../../styles/s-components/common'

import React from 'react'

export const InputRadio = ({
  id,
  label,
  radioArr = [],
  value,
  onChange,
  ...rest
}) => {
  return (
    <InputWrapper className={`input_${id}_radio`}>
      <CustomFieldset required>
        <BaseLabel as="legend">{label}</BaseLabel>
        <RadioWrapper className="radio_wrapper">
          {radioArr.map((el, idx) => {
            const { label, role } = el
            return (
              <div className={`radio_${role}`} key={idx}>
                <RadioLabel
                  htmlFor={`radio_${role}`}
                  isChecked={value === role}
                >
                  {label}
                </RadioLabel>
                <RadioBtn
                  type="radio"
                  id={`radio_${role}`}
                  value={role}
                  name={id}
                  checked={value === role}
                  onChange={onChange}
                  {...rest}
                />
              </div>
            )
          })}
        </RadioWrapper>
      </CustomFieldset>
    </InputWrapper>
  )
}
