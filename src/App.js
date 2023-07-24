import {
  InnerBox,
  InnerWrapper,
  OuterWrapper,
} from './styles/s-components/common'
import React, { useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import { GlobalStyle } from './styles/s-global/GlobalStyle'
import Guidance from './components/Guidance'
import Intro from './components/Intro'
import Invite from './components/Invite'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

function App() {
  const vh = window.innerHeight * 0.01
  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])
  return (
    <>
      <BrowserRouter>
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <GlobalStyle />
          <OuterWrapper>
            <InnerWrapper>
              <InnerBox>
                <Invite />
                <Intro />
                <Gallery />
                <Guidance />
                <Contact />
              </InnerBox>
            </InnerWrapper>
          </OuterWrapper>
        </StyleSheetManager>
      </BrowserRouter>
    </>
  )
}

export default App
