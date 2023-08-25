import React, { useEffect, useState } from 'react'

import { AlertWrapper } from '../styles/s-components/alert'

export const Alert = ({ callback, contents }) => {
  const [showAlert, setShowAlert] = useState(false)
  const alertHandler = () => {
    setShowAlert(true)
    setTimeout(() => {
      callback()
    }, 1000)
  }
  useEffect(() => {
    alertHandler()
  }, [])
  return <>{showAlert ? <AlertWrapper>{contents}</AlertWrapper> : null}</>
}
