import fs from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAKHk8cmhASnopScDppTh_bX9itBsxKzks",
  authDomain: "abcacademic-fbb55.firebaseapp.com",
  projectId: "abcacademic-fbb55",
  storageBucket: "abcacademic-fbb55.appspot.com",
  messagingSenderId: "22698836078",
  appId: "1:22698836078:web:b9e1946cc808866a03667f",
  measurementId: "G-QBPXSNDJ92"
};

fs.initializeApp(firebaseConfig);

export default fs;