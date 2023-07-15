import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const DropdownContainer = styled.div`
  min-width: 40%;
  position: relative;
  border-radius: 5px;
  > * {
    color: var(--black-200);
  }
`

export const DropdownBtn = styled.button`
  width: 100%;
  height: 2em;
  color: var(--gold-400);
  padding: 5px 10px;
  font-weight: var(--fw-bold);
  background-color: var(--gold-100);
  border-radius: ${(props) => (props.isOpen ? '5px 5px 0 0' : '5px')};
  box-shadow: ${(props) =>
    props.isOpen
      ? '-1px -1px var(--white), 1px 0px var(--black-shadow)'
      : '-1px -1px var(--white), 1px 1px var(--black-shadow)'};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  > svg {
    transition: all 0.3s ease-in-out;
  }
`

export const DropdownMenuContainer = styled.ul`
  position: relative;
  width: 100%;
  transform: ${(props) => (props.isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  z-index: -100;
  transform-origin: 0px 0px;
  transition: transform 0.3s ease-in-out;
  border-radius: 5px;
  &::after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0 0 5px 5px;
    top: 0;
    left: 0;
    box-shadow: -1px -1px var(--white), 1px 1px var(--black-shadow);
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
  }
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
