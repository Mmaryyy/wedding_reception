import 'firebase/compat/firestore'

import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDs-WYofULKT-ZJtfsSPKP8QhU-ZslGxeY',
  authDomain: 'wedding-reception-93e0b.firebaseapp.com',
  projectId: 'wedding-reception-93e0b',
  storageBucket: 'wedding-reception-93e0b.appspot.com',
  messagingSenderId: '832523473363',
  appId: '1:832523473363:web:efbb6572ceeba24645df26',
  measurementId: 'G-6PDN4YH6ZP',
}

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig)

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore()

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore }
