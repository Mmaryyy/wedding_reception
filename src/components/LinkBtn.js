/* eslint-disable */
import { AppBtn, AppLogo } from '../styles/s-components/guide'

import React from 'react'

const LinkBtn = ({ type, title }) => {
  const WEDDINGHALL = '카페아리아'
  const LAT = 35.1126524
  const LNG = 126.8485533
  const onClickAppBtn = () => {
    switch (type) {
      case 'kakaonavi':
        Kakao.Navi.start({
          name: WEDDINGHALL,
          x: LNG,
          y: LAT,
          coordType: 'wgs84',
        })
        return
      case 'tmap':
        ;(() => {
          window.location.href = `tmap://search?name=${WEDDINGHALL}`
        })()
        return
      case 'naver':
        ;(() => {
          const naverAppStoreUrl =
            'http://itunes.apple.com/kr/app/naver-map-navigation/id311867728'
          const appSchemeUrl = `nmap://route/car?dlat=${LAT}&dlng=${LNG}&dname=${WEDDINGHALL}&appname=https://wedding-reception-93e0b.web.app/`
          const clickedAt = +new Date()
          console.log(clickedAt)
          naverAppCheckTimer = setTimeout(() => {
            if (+new Date() - clickedAt < 2000) {
              window.location.href = naverAppStoreUrl
              return
            }
            return (window.location.href = appSchemeUrl)
          }, 5000)
        })()
      default:
        return console.log('type 에러')
    }
  }
  return (
    <AppBtn
      className={type}
      to={() => false}
      onClick={onClickAppBtn}
      isKakao={type === 'kakaonavi'}
    >
      <AppLogo alt={title} src={`/assets/${type}_CI_logotype.png`} />
      <pre>{title}</pre>
    </AppBtn>
  )
}

export default LinkBtn
