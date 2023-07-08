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

const Carousel = ({ imgSource }) => {
  const TOTAL_IMG = imgSource.length - 1
  const IMG_WIDTH = 90

  const [count, setCount] = useState(0)

  // 브라우저 마우스 이벤트
  const [mouseDownClientX, setMouseDownClientX] = useState(0)
  // const [mouseDownClientY, setMouseDownClientY] = useState(0)
  const [mouseUpClientX, setMouseUpClientX] = useState(0)
  // const [mouseUpClientY, setMouseUpClientY] = useState(0)

  // 모바일기기 터치 이벤트
  const [touchedX, setTouchedX] = useState(0)

  const onMouseDown = (e) => {
    console.log('mouseDown', e.clientX)
    setMouseDownClientX(e.clientX)
  }
  const onMouseUp = (e) => {
    console.log('mouseUp', e.clientX)
    setMouseUpClientX(e.clientX)
  }
  const onTouchStart = (e) => {
    setTouchedX(e.clientX)
  }
  const onTouchEnd = (e) => {
    console.log('touchEvent', e.changedTouches)
    const direction = touchedX - e.changedTouches[0].pageX
  }
  const handlePrevSlide = () => {
    if (count - 1 >= 0) return setCount((prev) => prev - 1)
    return setCount(TOTAL_IMG)
  }
  const handleNextSlide = () => {
    if (count + 1 <= TOTAL_IMG) return setCount((prev) => prev + 1)
    return setCount(0)
  }
  const handleMoveSlide = (target) => {
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

  useEffect(() => {
    // 1. mouse drag event가 발생한다 === mouseDownClientX
    // 2. mouseDown - mouseUp < 0 왼쪽, 그렇지 않으면 오른쪽
    const direction = mouseDownClientX - mouseUpClientX < 0 ? 'left' : 'right'
    console.log('방향', direction)
    if (direction === 'left') {
      return handlePrevSlide()
    }
    return handleNextSlide()
  }, [mouseUpClientX])

  return (
    <Container
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <ImageBox className="img_box" count={count} imgWidth={IMG_WIDTH}>
        {imgSource.map((el, idx) => (
          <ImageList className="img" key={idx}>
            <Img src={el} alt={`couple${idx + 1}`} />
          </ImageList>
        ))}
      </ImageBox>
      <ControllContainer className="controll">
        <BtnWrapper>
          <SlideBtn className="prev" onClick={handlePrevSlide}>
            {'<'}
          </SlideBtn>
          <SlideBtn className="next" onClick={handleNextSlide}>
            {'>'}
          </SlideBtn>
        </BtnWrapper>
        <BulletContainer>
          {imgSource.map((el, idx) => (
            <Bullet
              className={count === idx ? 'active' : null}
              key={idx}
              onClick={() => handleMoveSlide(idx)}
            />
          ))}
        </BulletContainer>
      </ControllContainer>
    </Container>
  )
}

export default Carousel
