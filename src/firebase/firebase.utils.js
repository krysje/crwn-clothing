import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA9xCiBfy9kjFMo4pQ6pZiIXRyHWQijGOo",
  authDomain: "crwn-db-2df8d.firebaseapp.com",
  databaseURL: "https://crwn-db-2df8d.firebaseio.com",
  projectId: "crwn-db-2df8d",
  storageBucket: "crwn-db-2df8d.appspot.com",
  messagingSenderId: "92560314938",
  appId: "1:92560314938:web:08ed8b18e93c4da2c9db03",
  measurementId: "G-T9NJCM4M2Z"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
