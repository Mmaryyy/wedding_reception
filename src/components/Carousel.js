/* eslint-disable */
import React, { useEffect, useState } from 'react'
import {
  Container,
  ImageBox,
  ImageList,
  Img,
  ControllContainer,
  BtnWrapper,
  SlideBtn,
  BulletContainer,
  Bullet,
} from '../styles/s-components/carousel'

const Carousel = () => {
  const IMG = [
    '/assets/couple1.png',
    '/assets/couple2.png',
    '/assets/couple3.png',
  ]
  const TOTAL_IMG = IMG.length - 1
  const IMG_WIDTH = 90

  const [count, setCount] = useState(0)
  const prevSlide = () => {
    if (count - 1 >= 0) return setCount((prev) => prev - 1)
    return setCount(TOTAL_IMG)
  }
  const nextSlide = () => {
    if (count + 1 <= TOTAL_IMG) return setCount((prev) => prev + 1)
    return setCount(0)
  }
  const moveSlide = (target) => {
    return setCount(target)
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev === TOTAL_IMG ? 0 : prev + 1))
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [count])

  return (
    <Container>
      <ImageBox className="img_box" count={count} imgWidth={IMG_WIDTH}>
        {IMG.map((el, idx) => (
          <ImageList className="img" key={idx}>
            <Img src={el} alt={`couple${idx + 1}`} />
          </ImageList>
        ))}
      </ImageBox>
      <ControllContainer className="controll">
        <BtnWrapper>
          <SlideBtn className="prev" onClick={prevSlide}>
            {'<'}
          </SlideBtn>
          <SlideBtn className="next" onClick={nextSlide}>
            {'>'}
          </SlideBtn>
        </BtnWrapper>
        <BulletContainer>
          <Bullet
            id="0"
            onClick={() => moveSlide(0)}
            className={count === 0 ? 'active' : null}
          />
          <Bullet
            id="1"
            onClick={() => moveSlide(1)}
            className={count === 1 ? 'active' : null}
          />
          <Bullet
            id="2"
            onClick={() => moveSlide(2)}
            className={count === 2 ? 'active' : null}
          />
        </BulletContainer>
      </ControllContainer>
    </Container>
  )
}

export default Carousel
