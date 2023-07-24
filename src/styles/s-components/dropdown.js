import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const DropdownContainer = styled.div`
  min-width: 40%;
  height: 6em;
  margin: 10px 0;
  color: var(--black-200);
`

export const DropdownBtn = styled.button`
  width: 100%;
  height: 2em;
  padding: 0 5px;
  color: var(--gold-400);
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

export const DropdownMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => (props.isOpen ? '4em' : '0px')};
  border-radius: 0 0 5px 5px;
  overflow: hidden;
  box-shadow: -1px 0px var(--white), 1px 1px var(--black-shadow);
  transition: height ease-in-out 0.3s;
`

// dropdown menu
export const DropdownMenuItem = styled.li`
  width: 100%;
  height: 2em;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  border-top: 0.5px solid white;
  &:active {
    background-color: var(--black-100);
  }
`

export const DropdownLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  cursor: pointer;
`

export const PayLogo = styled.img`
  width: 5em;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
`
