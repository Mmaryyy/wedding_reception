import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/s-global/variable.css'
import { GlobalStyle } from './styles/s-global/GlobalStyle'
import Invite from './components/Invite'
import Intro from './components/Intro'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Invite />
        <Intro />
      </BrowserRouter>
    </>
  )
}

export default App
