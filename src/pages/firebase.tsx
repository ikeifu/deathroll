// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuV4lXPyEVVLLYRWujep9X4GIGKZzu6nQ",
  authDomain: "deathroll-f4210.firebaseapp.com",
  projectId: "deathroll-f4210",
  storageBucket: "deathroll-f4210.appspot.com",
  messagingSenderId: "383372113413",
  appId: "1:383372113413:web:02d7a99cc7b4c0d3a84e6c",
  measurementId: "G-92041101SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const writeUserData = async (userId: string, name: string, email: string) => {
    const db = getDatabase()
    const reference = ref(db, 'users/' + userId)

    await set(reference, {
        username: name,
        email: email,
    })
}
export const writeUserRolls = async (matchId: string, rolls: number[]) => {
    const db = getDatabase()
    const reference = ref(db, 'rolls/' + matchId)

    await set(reference, {
        rolls: rolls,
    })
}
// const analytics = getAnalytics(app);