import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const DropdownContainer = styled.div`
  min-width: 40%;
  height: 100%;
  border-radius: 5px;
  margin: 20px 0;
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
  transform-origin: 0px 0px;
  transition: transform 0.3s ease-in-out;
  border-radius: 5px;
  &::after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 0 0 5px 5px;
    top: 0;
    left: 0;
    box-shadow: -1px 0px var(--white), 1px 1px var(--black-shadow);
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
  }
`

export const DropdownMenuWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 2em;
  display: flex;
  justify-content: center;
  z-index: 1;
  background-color: var(--white);
  border-radius: ${(props) => (props.isLast ? '0 0 5px 5px' : null)};
  border-top: 0.5px solid var(--black-100);
  &:active {
    background-color: var(--black-100);
  }
`

export const DropdownMenu = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  font-size: 20px;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    font-size: var(--fz-sm);
  }
`

export const PayLogo = styled.img`
  width: 5em;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
`
