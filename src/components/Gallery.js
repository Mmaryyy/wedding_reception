import { InnerContainer, Title } from '../styles/s-components/common'

import Carousel from './common/Carousel'
import React from 'react'

export const Gallery = () => {
  const IMG = new Array(9).fill(1).map((el, idx) => {
    return `/assets/couple${el + idx}.jpg`
  })
  return (
    <InnerContainer className="gallery">
      <Title>G a l l e r y</Title>
      <Carousel imgSource={IMG} />
    </InnerContainer>
  )
}
