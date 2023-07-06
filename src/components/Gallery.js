import React from 'react'
import { InnerWrapper, Title } from '../styles/s-components/common'
import Carousel from './Carousel'
const Gallery = () => {
  const IMG = [
    '/assets/couple1.png',
    '/assets/couple2.png',
    '/assets/couple3.png',
  ]
  return (
    <InnerWrapper className="gallery">
      <Title margin={'20px 0'}>G a l l e r y</Title>
      <Carousel imgSource={IMG} />
    </InnerWrapper>
  )
}

export default Gallery
