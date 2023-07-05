import styled from 'styled-components'
import '../s-global/variable.css'

// layout
export const OuterWrapper = styled.main`
  width: 100%;
  overflow: auto;
  display: flex;
  padding: 50px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.section`
  width: 90%;
  background-color: var(--white-bg);
  padding: ${(props) => props.padding || '0'};
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// contents
export const DivisionLine = styled.hr`
  width: 30%;
  height: 1.5px;
  background-color: var(--gold-300);
  border: 0;
  margin: 30px;
`
export const Title = styled.h1`
  font-family: var(--font-mapo);
  font-size: var(--fz-lg);
  margin: ${(props) => props.margin || '0px'};
  @media (max-width: 720px) {
    font-size: var(--fz-big);
  }
`

export const Content = styled.p`
  font-size: ${(props) => props.fz || `var(--fz-base)`};
  line-height: 1.8;
  @media (max-width: 720px) {
    font-size: var(--fz-base);
  }
`
