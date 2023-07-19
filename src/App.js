import React from 'react'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import './styles/s-global/variable.css'
import { GlobalStyle } from './styles/s-global/GlobalStyle'
import {
  InnerWrapper,
  InnerBox,
  OuterWrapper,
} from './styles/s-components/common'
import Invite from './components/Invite'
import Intro from './components/Intro'
import Gallery from './components/Gallery'
import Greeting from './components/Greeting'
function App() {
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
                <Greeting />
              </InnerBox>
            </InnerWrapper>
          </OuterWrapper>
        </StyleSheetManager>
      </BrowserRouter>
    </>
  )
}

export default App
