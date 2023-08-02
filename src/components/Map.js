import React, { useEffect, useRef, useState } from 'react'

import { MapContainer } from '../styles/s-components/map'
import { debounce } from 'lodash'

const { kakao } = window

const Map = () => {
  const LAT = 35.1126524
  const LNG = 126.8485533
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const ref = useRef(null)

  const handleResize = debounce(() => {
    setWindowWidth(window.innerWidth)
  }, 100)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      // cleanUp
      window.removeEventListener('resize', handleResize)
    }
  })
  // 렌더링될때 최상위 div의 너비 가져오기

  useEffect(() => {
    // 지도 생성
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(LAT, LNG),
      draggable: false,
      level: 4,
    }
    const map = new kakao.maps.Map(container, options)
    // 마커 생성
    const position = new kakao.maps.LatLng(LAT, LNG)
    const marker = new kakao.maps.Marker({
      position,
    })
    marker.setMap(map)
    // 커스텀오버레이 생성
    const content =
      '<div style="text-align: center; background-color: var(--white-bg); padding: 0.5rem; border-radius: 5px; font-size: var(--fz-sm);}"><strong>카페 아리아</strong><p style="line-height: 1.8;">광주 서구 회재유통길 24</p></div>'
    const customOverlay = new kakao.maps.CustomOverlay({
      position,
      content,
    })
    customOverlay.setMap(map)
  }, [windowWidth])
  return <MapContainer id="map" ref={ref} />
}

export default Map
