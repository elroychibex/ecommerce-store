import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAYzK0lICQzi1hUamgWIGdUc567Lo44-TY",
  authDomain: "elroy-db.firebaseapp.com",
  databaseURL: "https://elroy-db.firebaseio.com",
  projectId: "elroy-db",
  storageBucket: "elroy-db.appspot.com",
  messagingSenderId: "101915789693",
  appId: "1:101915789693:web:cb2c40ac337826d76b6414",
  measurementId: "G-NGWXXERNQB"
};

firebase.initializeApp(config);
// variable to initialize Firebase authentication
export const auth = firebase.auth();
// variable to initialize Firebase Firestore
export const firestone = firebase.firestore();

// async function to save signedin user to database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestone.doc(`users/${userAuth.uid}`);
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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
