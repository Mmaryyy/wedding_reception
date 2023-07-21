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
import Intro from './components/Intro'
import Invite from './components/Invite'
import Modal from './components/common/Modal'
import React from 'react'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { useSelector } from 'react-redux'

function App() {
  const { isOpen } = useSelector((state) => state.modal)
  return (
    <>
      <BrowserRouter>
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <GlobalStyle />
          {isOpen && <Modal />}
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
