import { styled } from 'styled-components'

export const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const DropdownWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 720px) {
    font-size: var(--fz-sm);
  }
`
