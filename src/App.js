import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/s-global/variable.css'
import { GlobalStyle } from './styles/s-global/GlobalStyle'
import { OuterWrapper } from './styles/s-components/common'
import Invite from './components/Invite'
import Intro from './components/Intro'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <OuterWrapper>
          <Invite />
          <Intro />
        </OuterWrapper>
      </BrowserRouter>
    </>
  )
}

export default App
