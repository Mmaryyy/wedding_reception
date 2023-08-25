import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0; padding: 0; border: none; background: none;
    font-size: 100%; font-weight: var(--fw-base); font-family: var(--font-nanum);
    -webkit-tap-highlight-color: transparent;
  }
  ol,ul {
    list-style: none;
  } 
  strong {
    font-weight: var(--fw-black);
  }
  img {
    vertical-align: top;
    outline: none;
  }
  hr {
    display: block;
    width: 100%;
    border-style: solid;
  }
  input,select,textarea,button {
    appearance: none; -webkit-appearance: none;
    outline: none; background: none;
    border: none; border-radius: 0;
    margin: 0; padding: 0;
  }
  input:-webkit-autofill, 
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active {
    background: transparent; background-clip: text; -webkit-background-clip: text;
    -webkit-text-fill-color: var(--black-400);
  }
  textarea {
    resize: none;
  }
  ::placeholder {
    font: inherit; 
  }
  a {
    text-decoration: none; color: inherit;
  }
  a:visited {
    background: none; color: inherit;
  }
  a:active {
    background: none; color: inherit;
  }
  #root {
    width: 100%;
    max-width: 720px;
  }
  body {
    display: flex;
    justify-content: center;
    background-color: var(--bg-outer);
    overflow-x: hidden;
    font-size: var(--fz-big);
    @media screen and (max-width: 720px) {
      font-size: var(--fz-base)
    }
    color: var(--black-400);
    font-family: var(--font-nanum),
    -apple-system, 
    BlinkMacSystemFont, 
    system-ui, 
    Roboto, 
    'Helvetica Neue', 
    'Segoe UI', 
    'Apple SD Gothic Neo', 
    'Noto Sans KR', 
    'Malgun Gothic', sans-serif;
  }
`
