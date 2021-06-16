import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

!firebase.apps.length
  ? firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    })
  : firebase.app()

export default firebase
