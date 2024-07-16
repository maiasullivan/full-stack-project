// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9DcGirIk-9kzn8tNDY3kt_y428FST_P0",
  authDomain: "full-stack-dev-project.firebaseapp.com",
  projectId: "full-stack-dev-project",
  storageBucket: "full-stack-dev-project.appspot.com",
  messagingSenderId: "725865568744",
  appId: "1:725865568744:web:c8ee881dc9c30e28d0ec5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);