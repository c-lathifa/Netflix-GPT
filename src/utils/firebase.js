// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyArjzN7XOyzSB5HUhYP_LT9r8uySBcDmMQ',
  authDomain: 'netflix-gpt-57789.firebaseapp.com',
  projectId: 'netflix-gpt-57789',
  storageBucket: 'netflix-gpt-57789.appspot.com',
  messagingSenderId: '85534386475',
  appId: '1:85534386475:web:d988ef38c54a4b5e9bbd6e',
  measurementId: 'G-11GLWRWRB9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
