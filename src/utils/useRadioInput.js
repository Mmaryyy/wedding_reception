import { useState } from 'react'

const useRadioInput = (initialValue) => {
  const [selected, setSelected] = useState(initialValue)
  const onChange = (e) => {
    setSelected(e.target.value)
  }
  return { selected, onChange }
}

export default useRadioInput
