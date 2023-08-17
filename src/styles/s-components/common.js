import '../s-global/variable.css'

import styled from 'styled-components'

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
  > .detail_wrapper {
    margin-top: 10px;
  }
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
  color: var(--black-300);
  opacity: 0.6;
  text-shadow: -1px -1px var(--black-200), 1px 1px var(--white);
  @media (max-width: 720px) {
    font-size: var(--fz-big);
  }
`

export const Content = styled.p`
  line-height: 1.8;
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fz || 'var(--fz-big)'};
  text-align: center;
  &.strong {
    font-weight: var(--fw-bold);
  }
  @media screen and (max-width: 720px) {
    font-size: ${(props) => props.fz || 'var(--fz-base)'};
    &.strong {
      font-size: 18px;
    }
  }
`

export const BaseBtn = styled.button`
  width: 100%;
  height: 3rem;
  padding: 0 5px;
  color: var(--gold-400);
  font-weight: var(--fw-bold);
  background-color: var(--gold-100);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--gold-200);
  }
`

export const BaseInput = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0 5px;
  border: 1px solid var(--gold-100);
  border-radius: 5px;
  &:focus,
  &:active,
  &:hover {
    border: 1px solid var(--gold-300);
  }
  &::placeholder {
    font-size: var(--fz-sm);
  }
`

export const BaseLabel = styled.label`
  font-weight: var(--fw-bold);
  font-size: var(--fz-sm);
  margin: 0 0 10px 0;
`

export const RadioLabel = styled(BaseLabel)`
  padding: 5px 10px;
  font-size: var(--fz-base);
  background-color: ${(props) =>
    props.isChecked ? 'var(--gold-300)' : 'var(--black-100)'};
  border-radius: 5px;
  margin-right: 10px;
  color: ${(props) => (props.isChecked ? 'white' : 'inherit')};
  &:hover,
  &:active,
  &:focus {
    background-color: var(--gold-300);
    color: white;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 10px 0;
  > * {
    width: 100%;
  }
`

export const CustomFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`

export const RadioWrapper = styled.div`
  display: flex;
`

export const RadioBtn = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  opacity: 0%;
`
