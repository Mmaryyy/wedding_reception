import React, { useEffect } from 'react'
import {
  ShareBtn,
  ShareLabel,
  ShareWrapper,
} from '../styles/s-components/sharelink'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const { Kakao } = window

export const ShareLink = () => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
    }
  }, [])

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '피로연에 초대합니다.',
        description:
          '이춘홍, 김순덕의 둘째 딸 혜인이와 사위의 앞날을 축복해 주세요.',
        imageUrl: `${process.env.REACT_APP_BASE_URL}/assets/share_thumbnail.png`,
        imageHeight: 750,
        link: {
          mobileWebUrl: process.env.REACT_APP_BASE_URL,
          webUrl: process.env.REACT_APP_BASE_URL,
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: process.env.REACT_APP_BASE_URL,
            webUrl: process.env.REACT_APP_BASE_URL,
          },
        },
      ],
    })
  }

  return (
    <ShareWrapper>
      <ShareBtn id="share_btn" onClick={() => shareKakao()}>
        <FontAwesomeIcon icon={faLink} size="xl" />
      </ShareBtn>
      <ShareLabel htmlFor="share_btn">카카오톡 공유하기</ShareLabel>
    </ShareWrapper>
  )
}
