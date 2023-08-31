import {
  Attendance,
  Contact,
  Gallery,
  Guidance,
  Intro,
  Invite,
  ShareLink,
} from '../components/index'

import React from 'react'

export const Default = () => {
  return (
    <>
      <Invite />
      <Intro />
      <Gallery />
      <Guidance />
      <Contact />
      <Attendance />
      <ShareLink />
    </>
  )
}
