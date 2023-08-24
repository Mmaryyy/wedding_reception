import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CheckList, Default } from './pages'
import {
  InnerBox,
  InnerWrapper,
  OuterWrapper,
} from './styles/s-components/common'
import React, { useEffect } from 'react'

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
                <Routes>
                  <Route path="/" element={<Default />} />
                  <Route path="/list" element={<CheckList />} />
                </Routes>
              </InnerBox>
            </InnerWrapper>
          </OuterWrapper>
        </StyleSheetManager>
      </BrowserRouter>
    </>
  )
}

export default App
