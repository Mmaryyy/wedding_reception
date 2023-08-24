import * as Input from './Input'

import React, { useState } from 'react'

import { firestore } from '../firebase'
import useInput from '../utils/useInput'

const CheckList = () => {
  // 비밀번호를 확인하기 전에 보여줄 화면과
  // 확인 후 보여줄 화면 분기하기
  const [authorization, setAuthorization] = useState(false)
  const { value, onChange } = useInput('')

  const comparePassword = async (e) => {
    // db의 token과 비교하여 같은 값이 있는지 여부 리턴
    const data = await firestore
      .collection('authorization')
      .where('value', '==', e.target.value)
      .get()
    return !data.empty
  }

  const passwordHandler = async (e) => {
    onChange(e)
    const isPasswordCorrect = await comparePassword(e)
    if (isPasswordCorrect) {
      setAuthorization(!authorization)
    }
  }

  return (
    <>
      {!authorization ? (
        <>
          <Input.Password
            id={'password'}
            label={'비밀번호'}
            placeholder={'비밀번호를 입력하세요.'}
            value={value}
            onChange={passwordHandler}
          />
        </>
      ) : (
        <>
          <p>테이블</p>
        </>
      )}
    </>
  )
}

export default CheckList
