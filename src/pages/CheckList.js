import * as Input from './../components/Input'

import {
  BaseBtn,
  InnerContainer,
  Table,
  TableBodyWrapper,
  TableData,
  TableHead,
  TableTitle,
} from '../styles/s-components/common'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { firestore } from '../firebase'
import useInput from '../utils/useInput'

export const CheckList = () => {
  // 비밀번호를 확인하기 전에 보여줄 화면과
  // 확인 후 보여줄 화면 분기하기
  const [authorization, setAuthorization] = useState(false)
  const [list, setList] = useState([])
  const { value, onChange } = useInput('')
  let total = 0
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

  const getList = async () => {
    try {
      const data = []
      const collectionRef = firestore.collection('attendance')
      const listSnapshot = await collectionRef.get()

      listSnapshot.forEach((doc) => {
        data.push({
          ...doc.data(),
        })
      })

      setList(data)
    } catch (e) {}
  }
  useEffect(() => {
    getList()
  }, [])
  console.log(list)
  return (
    <InnerContainer page={true} justifyContent={'flex-start'}>
      {!authorization ? (
        <Input.Password
          id={'password'}
          label={'비밀번호'}
          placeholder={'비밀번호를 입력하세요.'}
          value={value}
          onChange={passwordHandler}
        />
      ) : (
        <Table>
          <TableTitle>참석 명단</TableTitle>
          <thead id="tableHead">
            <tr>
              <TableHead>이름</TableHead>
              <TableHead>구분</TableHead>
              <TableHead>참석 인원</TableHead>
              <TableHead>구분 번호</TableHead>
            </tr>
          </thead>
          <TableBodyWrapper>
            {list.map((el, idx) => {
              const { name, selectedParents, totalPeople, phoneNumber } = el
              const parents = selectedParents === 'daddy' ? '아빠' : '엄마'
              total = total + totalPeople
              return (
                <tr key={idx}>
                  <TableData>{name}</TableData>
                  <TableData>{parents}</TableData>
                  <TableData>{totalPeople}</TableData>
                  <TableData>{phoneNumber}</TableData>
                </tr>
              )
            })}
            <tr>
              <TableHead colSpan={3} bgColor={'var(--gold-main)'}>
                총 인원
              </TableHead>
              <TableData bgColor={'var(--gold-main)'}>{total}</TableData>
            </tr>
          </TableBodyWrapper>
        </Table>
      )}
      <BaseBtn as={Link} to={'/'}>
        나가기
      </BaseBtn>
    </InnerContainer>
  )
}
