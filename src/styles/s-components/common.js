import styled from 'styled-components'
import '../s-global/variable.css'

// layout - outer background
export const OuterWrapper = styled.main`
  width: 100%;
  padding: 20px;
  position: relative;
`

export const InnerWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  background: var(--bg-inner);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const InnerBox = styled.div`
  width: 100%;
  background: var(--bg-inner);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid var(--black-200);
`

// layout - contents
export const InnerContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContentWrapper = styled.section`
  width: 100%;
  background-color: var(--white-bg);
  padding: ${(props) => props.padding || '0'};
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -1px -1px var(--white), 1px 1px var(--black-100);
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
  text-align: center;
  margin: ${(props) => props.margin || '40px 0'};
  color: var(--gold-100);
  opacity: 0.6;
  text-shadow: -1px -1px var(--black-200), 1px 1px var(--white);
  @media (max-width: 720px) {
    font-size: var(--fz-big);
  }
`

export const Content = styled.p`
  line-height: 1.8;
  color: ${(props) => props.color || 'inherit'};
  &.strong {
    font-weight: var(--fw-bold);
  }
  @media screen and (max-width: 720px) {
    &.strong {
      font-size: 18px;
    }
  }
`
