import './styles/s-global/variable.css'

import {
  InnerBox,
  InnerWrapper,
  OuterWrapper,
} from './styles/s-components/common'

import { BrowserRouter } from 'react-router-dom'
import Gallery from './components/Gallery'
import { GlobalStyle } from './styles/s-global/GlobalStyle'
import Greeting from './components/Greeting'
// import Guide from './components/Guide'
import Intro from './components/Intro'
import Invite from './components/Invite'
// import Map from './components/Map'
import React from 'react'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

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
