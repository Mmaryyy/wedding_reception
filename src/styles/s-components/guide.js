import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const GuideContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AppBtnWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  margin-top: 5px;
  border-radius: 3px;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    height: 3rem;
  }
`

export const AppBtn = styled(Link)`
  width: 32%;
  height: 100%;
  padding-right: 5px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isKakao ? 'var(--kakaoYellow)' : 'white'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:active,
  &:hover {
    background-color: ${(props) =>
      props.isKakao ? 'var(--kakaoYellow)' : 'white'};
  }
  &.naver {
    border-right: 0px;
  }
  > pre {
    flex-grow: 1;
    line-height: 1.3;
    text-align: center;
    color: var(--gold-400);
    font-weight: var(--fw-bold);
    word-break: break-all;
    @media screen and (max-width: 720px) {
      font-size: var(--fz-sm);
    }
  }
`

export const AppLogo = styled.img`
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 3px;
`
