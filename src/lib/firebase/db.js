import {
  SECRET_FIREBASE_API_KEY,
  SECRET_FIREBASE_AUTH_DOMAIN,
  SECRET_FIREBASE_PROJECT_ID,
  SECRET_FIREBASE_STORAGE_BUCKET,
  SECRET_FIREBASE_MESSAGING_SENDER_ID,
  SECRET_FIREBASE_APP_ID,
  SECRET_FIREBASE_MEASURMENT_ID,
} from '$env/static/private'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: SECRET_FIREBASE_API_KEY,
  authDomain: SECRET_FIREBASE_AUTH_DOMAIN,
  projectId: SECRET_FIREBASE_PROJECT_ID,
  storageBucket: SECRET_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: SECRET_FIREBASE_MESSAGING_SENDER_ID,
  appId: SECRET_FIREBASE_APP_ID,
  measurementId: SECRET_FIREBASE_MEASURMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
