import { styled } from 'styled-components'

export const MapContainer = styled.div`
  width: 100%;
  height: var(--map-height);
  overflow: hidden;
  position: relative;
`

export const MapCover = styled.div`
  width: 100%;
  height: var(--map-height);
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`
