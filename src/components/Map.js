/* eslint-disable */
import React from 'react'
import { MapContainer } from '../styles/s-components/map'

const Map = () => {
  const { kakao } = window
  const container = document.getElementById('map')
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  }
  const map = new kakao.maps.Map(container, options)
  return <MapContainer id="map"></MapContainer>
}

export default Map
