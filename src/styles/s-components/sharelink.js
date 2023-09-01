import { styled } from 'styled-components'

export const ShareWrapper = styled.section`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ShareBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px double var(--gold-200);
  color: var(--gold-200);
`

export const ShareLabel = styled.label`
  color: var(--black-200);
  font-size: var(--fz-sm);
  margin-top: 10px;
`
