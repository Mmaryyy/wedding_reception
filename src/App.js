import React from 'react'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import './styles/s-global/variable.css'
import { GlobalStyle } from './styles/s-global/GlobalStyle'
import { Provider } from 'react-redux'
import { store } from './store'
import {
  InnerWrapper,
  InnerBox,
  OuterWrapper,
} from './styles/s-components/common'
import Invite from './components/Invite'
import Intro from './components/Intro'
import Gallery from './components/Gallery'
import Greeting from './components/Greeting'
import Modal from './components/common/Modal'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <GlobalStyle />
            <Modal />
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
      </Provider>
    </>
  )
}

export default App
