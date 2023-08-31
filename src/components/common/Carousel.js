import {
  Bullet,
  BulletContainer,
  CarouselBtnWrapper,
  CarouselContainer,
  ControllContainer,
  ImageBox,
  Img,
  SlideBtn,
} from '../../styles/s-components/carousel'
import React, { useEffect, useRef, useState } from 'react'

import { debounce } from 'lodash'

const Carousel = ({ imgSource }) => {
  const TOTAL_IMG = imgSource.length - 1
  const ref = useRef(null)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [imgWidth, setImgWidth] = useState(0)
  const [count, setCount] = useState(0)

  const handleResize = debounce(() => {
    setWindowWidth(window.innerWidth)
  }, 300)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      // cleanUp
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  // 렌더링될때 최상위 div의 너비 가져오기
  useEffect(() => {
    setImgWidth(ref.current.clientWidth)
  }, [windowWidth])

  // 브라우저 마우스 이벤트
  const [mouseDownClientX, setMouseDownClientX] = useState(0)
  const [mouseUpClientX, setMouseUpClientX] = useState(0)
  const onMouseDown = (e) => {
    setMouseDownClientX(e.clientX)
  }
  const onMouseUp = (e) => {
    setMouseUpClientX(e.clientX)
  }

  // 모바일기기 터치 이벤트
  const [touchedX, setTouchedX] = useState(0)

  const onTouchStart = (e) => {
    setTouchedX(e.changedTouches[0].pageX)
  }
  const onTouchEnd = (e) => {
    if (touchedX === e.changedTouches[0].pageX) return
    if (touchedX - e.changedTouches[0].pageX < 0) {
      return handlePrevSlide()
    }
    return handleNextSlide()
  }

  // 슬라이드 이동 이벤트
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
    if (mouseDownClientX === mouseUpClientX) return
    if (mouseDownClientX - mouseUpClientX < 0) {
      return handlePrevSlide()
    }
    return handleNextSlide()
  }, [mouseUpClientX])

  return (
    <CarouselContainer
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      ref={ref}
    >
      <ImageBox className="img_box" count={count} imgWidth={imgWidth}>
        {imgSource.map((el, idx) => (
          <li className="img" key={idx}>
            <Img src={el} alt={`couple${idx + 1}`} width={imgWidth} />
          </li>
        ))}
      </ImageBox>
      <ControllContainer className="controll">
        <CarouselBtnWrapper>
          <SlideBtn className="prev" onClick={handlePrevSlide}>
            {'<'}
          </SlideBtn>
          <SlideBtn className="next" onClick={handleNextSlide}>
            {'>'}
          </SlideBtn>
        </CarouselBtnWrapper>
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
    </CarouselContainer>
  )
}

export default Carousel
