import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGhpa2kO01EUQT1xQeFGtgRyfAiqQE4xA",
  authDomain: "vacation-ratings.firebaseapp.com",
  projectId: "vacation-ratings",
  storageBucket: "vacation-ratings.appspot.com",
  messagingSenderId: "767889691346",
  appId: "1:767889691346:web:85b5a1a35ac08a1b86930b",
  measurementId: "G-SXCRSR4XDS"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);