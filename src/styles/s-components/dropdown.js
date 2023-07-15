import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const DropdownContainer = styled.div`
  width: 40%;
  margin: 10px 0;
  > * {
    color: var(--black-200);
  }
`

export const DropdownBtn = styled.button`
  width: 100%;
  height: 2em;
  color: var(--gold-400);
  font-weight: var(--fw-bold);
  background-color: var(--gold-100);
  border-radius: ${(props) => (props.isOpen ? '5px 5px 0 0' : '5px')};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  > svg {
    transition: all 0.3s ease-in-out;
  }
`

export const DropdownMenuContainer = styled.ul`
  width: 100%;
  transform: ${(props) => (props.isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: 0px 0px;
  transition: all 0.3s ease-in-out;
`

export const DropdownMenuWrapper = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const DropdownMenu = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100%;
  padding: 0.5em;
  background-color: var(--white);
  border-radius: ${(props) => (props.isLast ? '0 0 5px 5px' : '0px')};
  border-top: 0.5px solid var(--black-100);
  &:active {
    background-color: var(--black-100);
  }
  @media screen and (max-width: 720px) {
    font-size: var(--fz-sm);
  }
`
