import { CheckList, Default } from './pages'
import {
  InnerBox,
  InnerWrapper,
  OuterWrapper,
} from './styles/s-components/common'
import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/s-global/GlobalStyle'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

function App() {
  const vh = window.innerHeight * 0.01
  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])
  const router = createBrowserRouter([
    { path: '/', element: <Default /> },
    { path: '/list', element: <CheckList /> },
  ])
  return (
    <>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <GlobalStyle />
        <OuterWrapper>
          <InnerWrapper>
            <InnerBox>
              <RouterProvider router={router} />
            </InnerBox>
          </InnerWrapper>
        </OuterWrapper>
      </StyleSheetManager>
    </>
  )
}

export default App
