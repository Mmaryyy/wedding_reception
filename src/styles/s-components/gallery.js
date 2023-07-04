import { styled } from 'styled-components'

export const Container = styled.section`
  width: 90%;
  height: 500px;
  overflow: hidden;
  position: relative;
`

export const ImageBox = styled.ul`
  /* margin: 10px 0 0 0; */
  padding: 0;
  width: inherit;
  height: 100%;
  display: flex;
  transition: ${(props) => props.count || 'all 0.5s ease-in-out'};
  transform: ${(props) => `translateX(-${props.count * 33.3}%)`};
`

export const ImgWrapper = styled.li`
  width: 100%;
  flex-grow: 1;
`

export const Img = styled.img`
  object-fit: contain;
`

export const Bullets = styled.div`
  position: absolute;
  display: flex;
  left: 50%;
  bottom: 10px;
  z-index: 2;
`

export const Label = styled.label`
  display: inline-block;
  border-radius: 50%;
  background-color: rgba(88, 84, 84, 0.55);
  width: 10px;
  height: 10px;
  margin: 5px 5px;
  cursor: pointer;
`
