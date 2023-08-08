import { AppBtnWrapper, GuideContainer } from '../styles/s-components/guide'

import LinkBtn from './LinkBtn'
import Map from './Map'
import React from 'react'
import { Title } from '../styles/s-components/common'

const Guidance = () => {
  const appArr = [
    {
      type: 'kakaonavi',
      title: '카카오\n내비',
    },
    {
      type: 'tmap',
      title: '티 맵',
    },
    {
      type: 'naver',
      title: '네이버\n지도',
    },
  ]

  return (
    <GuideContainer className="guidance">
      <Title>오 시 는 길</Title>
      <Map />
      <AppBtnWrapper>
        {appArr.map((el, idx) => {
          const { type, title } = el
          return <LinkBtn key={idx} title={title} type={type} />
        })}
      </AppBtnWrapper>
    </GuideContainer>
  )
}

export default Guidance
