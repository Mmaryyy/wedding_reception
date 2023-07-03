import styled from 'styled-components'

export const InviteWrapper = styled.div`
  width: 90%;
  background-color: var(--white-bg);
  padding: 50px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-family: var(--font-mapo);
  font-size: var(--fz-lg);
  margin-bottom: 30px;
  @media (max-width: 720px) {
    font-size: var(--fz-big);
  }
`
