import React, { useState, useRef, useEffect } from 'react'
import {
  Container,
  ImageBox,
  ImgWrapper,
  Img,
  Bullets,
  Label,
} from '../styles/s-components/gallery'
const Gallery = () => {
  const TOTAL_SLIDES = 2
  // const imgLength = 1000
  const IMG = [
    '/assets/couple1.png',
    '/assets/couple2.png',
    '/assets/couple3.png',
  ]

  // const [currentIdx, setCurrentIdx] = useState(0)
  const [count, setCount] = useState(0)
  const slideRef = useRef(null)

  // const nexSlide = () => {
  //   if (currentIdx >= TOTAL_SLIDES) {
  //     setCurrentIdx(0)
  //   } else {
  //     setCurrentIdx((prev) => prev + 1)
  //   }
  // }

  // const prevSlide = () => {
  //   if (currentIdx === 0) {
  //     setCurrentIdx(TOTAL_SLIDES)
  //   } else {
  //     setCurrentIdx((prev) => prev - 1)
  //   }
  // }

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev === TOTAL_SLIDES ? 0 : prev + 1))
    }, 3000)
    return () => {
      clearInterval(timer)
    }
  })
  return (
    <>
      <Container>
        <input type="radio" name="slider" id="slider1" />
        <input type="radio" name="slider" id="slider2" />
        <input type="radio" name="slider" id="slider3" />
        <ImageBox ref={slideRef} count={count}>
          {IMG.map((el, idx) => (
            <ImgWrapper key={idx}>
              <Img src={el} alt={`couple${idx}`} />
            </ImgWrapper>
          ))}
        </ImageBox>
        <Bullets>
          <Label for="slider1" />
          <Label for="slider2" />
          <Label for="slider2" />
        </Bullets>
      </Container>
    </>
  )
}

export default Gallery
