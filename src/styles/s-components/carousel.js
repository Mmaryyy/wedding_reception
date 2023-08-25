import { styled } from 'styled-components'

export const CarouselContainer = styled.div`
  width: 100%;
  height: var(--img-height);
  margin: 10px auto;
  overflow: hidden;
  position: relative;
  border-radius: 3px;
  box-shadow: -1px -1px var(--black-100), 1px 1px var(--black-100);
`

export const ImageBox = styled.ul`
  position: absolute;
  height: 100%;
  display: flex;
  transition: all 0.8s ease-in-out;
  transform: ${(props) => `translateX(-${props.count * props.imgWidth}px)`};
`

export const Img = styled.img`
  width: ${(props) => props.width || '90vw'};
  height: var(--img-height);
  object-fit: cover;
`

export const ControllContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 4;
`

export const SlideBtn = styled.button`
  width: 1em;
  height: 1em;
  font-size: 3em;
  color: var(--white-bg);
  cursor: pointer;
  &:active {
    color: var(--white);
  }
  @media (max-width: 720px) {
    width: 0.5em;
    height: 0.5em;
    font-size: 3em;
  }
  @media (hover: hover) {
    &:hover {
      color: var(--white);
    }
  }
`

export const BulletContainer = styled.ul`
  width: 40%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Bullet = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--white-bg);
  cursor: pointer;
  @media (max-width: 720px) {
    width: 10px;
    height: 10px;
  }
  &.active {
    background-color: var(--white);
  }
  @media (hover: hover) {
    &:hover {
      background-color: var(--white);
    }
  }
`
