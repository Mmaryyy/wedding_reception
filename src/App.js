import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/s-global/variable.css'
import { GlobalStyle } from './styles/s-global/GlobalStyle'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
      </BrowserRouter>
    </>
  )
}

export default App
