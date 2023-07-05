import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/s-global/variable.css'
import { GlobalStyle } from './styles/s-global/GlobalStyle'
import { OuterWrapper } from './styles/s-components/common'
import Invite from './components/Invite'
import Intro from './components/Intro'
import Carousel from './components/Carousel'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <OuterWrapper>
          <Invite />
          <Intro />
          <Carousel />
        </OuterWrapper>
      </BrowserRouter>
    </>
  )
}

export default App
