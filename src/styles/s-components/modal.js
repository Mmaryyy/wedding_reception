import { BaseBtn } from './common'
import { styled } from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`

export const ModalBack = styled.div`
  background-color: var(--modalBack);
  width: 100%;
  height: 100%;
`

export const ModalContentWrapper = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  min-height: 30%;
  padding: 1rem;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 720px) {
    width: 75%;
  }
`

export const ModalContent = styled.pre`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 720px) {
    font-size: var(--fz-base);
  }
`

export const ModalBtnWrapper = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: ${(props) => (props.callback ? 'space-between' : 'center')};
  align-items: center;
  & > button {
    width: ${(props) => (props.callback ? '40%' : '80%')};
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 5px;
  & > svg {
    color: var(--black-200);
  }
  cursor: pointer;
`

export const ModalBtn = styled(BaseBtn)`
  height: 2.5rem;
  padding: 5px;
  margin: 0 5px;
  @media screen and (max-width: 720px) {
    font-size: var(--fz-sm);
  }
`

export const ModalInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`

export const Warning = styled.p`
  min-height: 16px;
  color: red;
  margin-bottom: 15px;
  font-size: var(--fz-sm);
`
