import { MapContainer, MapCover } from '../../styles/s-components/map'
import React, { useEffect, useRef, useState } from 'react'

import { debounce } from 'lodash'

const { kakao } = window

const Map = () => {
  const LAT = 35.1989919
  const LNG = 126.8344649
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

  useEffect(() => {
    // 지도 생성
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(LAT, LNG),
      draggable: false,
      disableDoubleClickZoom: true,
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
    const overlayPosition = new kakao.maps.LatLng(LAT - 0.0013, LNG)
    const content =
      '<div style="text-align: center; background-color: var(--white-bg); padding: 0.5rem; border-radius: 5px; font-size: var(--fz-sm);}"><strong>스타파티오 스피카홀</strong><p style="line-height: 1.8;">광주 광산구 왕버들로 217</p> <p style="line-height: 1.8;"></p>한듬레포츠 2층</div>'
    const customOverlay = new kakao.maps.CustomOverlay({
      position: overlayPosition,
      content,
    })
    customOverlay.setMap(map)
  }, [windowWidth])

  return (
    <>
      <MapContainer id="map" ref={ref}>
        <MapCover id="map_cover" />
      </MapContainer>
    </>
  )
}

export default Map
