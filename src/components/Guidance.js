import { GuideContainer } from '../styles/s-components/guide'
import Map from './Map'
import React from 'react'
import { Title } from '../styles/s-components/common'

const Guidance = () => {
  return (
    <GuideContainer className="guidance">
      <Title>오 시 는 길</Title>
      <Map />
    </GuideContainer>
  )
}

export default Guidance
