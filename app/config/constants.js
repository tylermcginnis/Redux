import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCSEjdMSOuBRri4KAv5L0D_kzXqDxxi9v0",
  authDomain: "duckr.firebaseapp.com",
  databaseURL: "https://duckr.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000