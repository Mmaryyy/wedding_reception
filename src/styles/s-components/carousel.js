import { styled } from 'styled-components'

export const Container = styled.div`
  width: 90%;
  height: 30vh;
  margin: 10px auto;
  overflow: hidden;
  position: relative;
`

export const ImageBox = styled.ul`
  position: absolute;
  height: 100%;
  display: flex;
  transition: all 0.8s ease-in-out;
  transform: ${(props) => `translateX(-${props.count * props.imgWidth}vw)`};
`

export const ImageList = styled.li`
  width: 90vw;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ControllContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
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
  width: 40px;
  height: 50px;
  font-size: var(--fz-lg);
  color: var(--white-bg);
  cursor: pointer;
  &:active {
    color: var(--white);
  }
  @media (max-width: 720px) {
    width: 0.5em;
    height: 0.5em;
    font-size: var(--fz-big);
  }
  @media (hover: hover) {
    &:hover {
      color: var(--white);
    }
  }
`

export const BulletContainer = styled.ul`
  width: 15%;
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
