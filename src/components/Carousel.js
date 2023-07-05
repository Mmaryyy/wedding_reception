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

const Carousel = ({ imgSource }) => {
  const TOTAL_IMG = imgSource.length - 1
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
        {imgSource.map((el, idx) => (
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
          {imgSource.map((el, idx) => (
            <Bullet
              className={count === idx ? 'active' : null}
              key={idx}
              onClick={() => moveSlide(idx)}
            />
          ))}
        </BulletContainer>
      </ControllContainer>
    </Container>
  )
}

export default Carousel
