import React from "react";

// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBK2VFn6WXqKhbiCHKpu48CB66dhNyNzok",
  authDomain: "react-cv-8faa1.firebaseapp.com",
  storageBucket: "gs://react-cv-8faa1.appspot.com",

  projectId: "react-cv-8faa1",

  // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
};

const SignIn = () => {
  return (
    <main>
      <div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </main>
  );
};

export default SignIn;
