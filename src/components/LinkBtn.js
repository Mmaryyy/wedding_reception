import { AppBtn, AppLogo } from '../styles/s-components/guide'
import React, { useEffect } from 'react'

const LinkBtn = ({ type, title }) => {
  const WEDDINGHALL = '스타파티오'
  const LAT = 35.1989919
  const LNG = 126.8344649
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('b2d2b92adb867bc2d028a2dc23a68643')
    }
  }, [])
  const getAppScheme = () => {
    switch (type) {
      case 'kakaonavi':
        window.Kakao.Navi.start({
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
          window.location.href = `nmap://route/car?dlat=${LAT}&dlng=${LNG}&dname=${WEDDINGHALL}&appname=https://wedding-reception-93e0b.web.app/`
        })()
    }
  }
  const getStoreScheme = () => {
    // 2. User agent에서 안드로이드 - IOS 체크
    // 2-2. IOS: 앱스토어 링크로 이동
    // 2-1. 안드로이드: 안드로이드 크롬이면 intent, 그외 브라우저에서는 -> 구글 플레이스토어 이동
    const IOS = /iPhone|iPad|iPod/i
    const ANDROID = /android/i
    // const CHROME = /chrome/i
    const userAgent = navigator.userAgent
    const IosTmapUrl = 'https://apps.apple.com/kr/app/tmap/id431589174'
    const IosNaverMapUrl =
      'https://apps.apple.com/kr/app/naver-map-navigation/id311867728'
    const AndroidTmapUrl =
      'https://play.google.com/store/apps/details?id=com.skt.tmap.ku&hl=ko&gl=US'
    const AndroidNaverMapUrl =
      'https://play.google.com/store/apps/details?id=com.nhn.android.nmap&hl=ko&gl=US'
    // const IntentTmapUrl = 'intent://'
    // const IntentNaverMapUrl = ''
    //  "intent://커스텀스킴주소#Intent; scheme=스킴; action=..;category=..; package=com.android.xxx; end;";
    if (userAgent.match(IOS)) {
      if (type === 'tmap') {
        return IosTmapUrl
      }
      return IosNaverMapUrl
    }

    if (userAgent.match(ANDROID)) {
      // if (userAgent.match(CHROME)) {
      //   if (type === 'tmap') {
      //     return
      //   }
      // }
      if (type === 'tmap') {
        return AndroidTmapUrl
      }
      return AndroidNaverMapUrl
    }
  }
  const onClickAppBtn = () => {
    // 앱 설치 여부 감지(화면 이동 여부)를 위한 클릭 시점 저장
    const clickedAt = +new Date()

    getAppScheme()

    //* 500ms 이후 화면 이동 감지 없으면 store로 이동
    setTimeout(() => {
      if (+new Date() - clickedAt < 2000) {
        return (window.location.href = getStoreScheme())
      }
    }, 500)
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
