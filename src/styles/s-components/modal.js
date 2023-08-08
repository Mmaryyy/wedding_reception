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
  height: 30%;
  padding: 1.5rem;
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

export const ModalBtn = styled.button`
  height: 2.5em;
  background-color: var(--gold-100);
  border-radius: 5px;
  padding: 5px;
  color: var(--gold-400);
  @media screen and (max-width: 720px) {
    font-size: var(--fz-sm);
  }
`
