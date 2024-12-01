import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPZU5lT4KIWYw_2KFjQbBIcPpwR3lpdus",
  authDomain: "fir-45dc0.firebaseapp.com",
  projectId: "fir-45dc0",
  storageBucket: "fir-45dc0.firebasestorage.app",
  messagingSenderId: "365562584182",
  appId: "1:365562584182:web:162151a4decac880841357",
  measurementId: "G-66N9GGRTML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth };
