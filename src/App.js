import {
  Attendance,
  Contact,
  Gallery,
  Guidance,
  Intro,
  Invite,
} from './components'
import {
  InnerBox,
  InnerWrapper,
  OuterWrapper,
} from './styles/s-components/common'
import React, { useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/s-global/GlobalStyle'
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
                <Attendance />
              </InnerBox>
            </InnerWrapper>
          </OuterWrapper>
        </StyleSheetManager>
      </BrowserRouter>
    </>
  )
}

export default App
