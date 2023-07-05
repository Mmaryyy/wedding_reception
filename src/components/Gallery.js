import React from 'react'
import { Title } from '../styles/s-components/common'
import Carousel from './Carousel'
const Gallery = () => {
  const IMG = [
    '/assets/couple1.png',
    '/assets/couple2.png',
    '/assets/couple3.png',
  ]
  return (
    <>
      <Title margin={'20px 0'}>G a l l e r y</Title>
      <Carousel imgSource={IMG} />
    </>
  )
}

export default Gallery
