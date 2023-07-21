import { styled } from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  inset: 0;
`

export const ModalBack = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--modalBack);
`

export const ModalContentWrapper = styled.section`
  min-width: 15em;
  min-height: 10em;
  padding: 1.5em;
  background-color: var(--white);
  border-radius: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const ModalContent = styled.p`
  line-height: 1.8;
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ModalBtn = styled.button`
  width: 4em;
  height: 2em;
  background-color: var(--gold-100);
  border-radius: 5px;
  padding: 5px;
  font-size: var(--fz-sm);
  color: var(--gold-400);
`
