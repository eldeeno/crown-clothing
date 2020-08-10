import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDUpODjg_cw9AhSWWGfwrEX5M2m_dGw9NA",
  authDomain: "crown-db-961f4.firebaseapp.com",
  databaseURL: "https://crown-db-961f4.firebaseio.com",
  projectId: "crown-db-961f4",
  storageBucket: "crown-db-961f4.appspot.com",
  messagingSenderId: "574408417116",
  appId: "1:574408417116:web:12750137bd60acc977eb99"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;