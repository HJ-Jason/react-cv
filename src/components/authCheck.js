import React, { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import MyResume from "./cv";
import UnAuth from "./unAuth";

const auth = getAuth();

function WhenSignOut() {
  console.log("LogOut");
  signOut(auth);
}

const AuthCheck = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });

    return () => unregisterAuthObserver();
  });

  if (!isSignedIn) {
    return <UnAuth />;
  } else {
    const user = auth.currentUser;
    console.log(user);

    const email = user.email;
    const photoURL = user.photoURL;
    const displayName = user.displayName;
    console.log(email);

    return (
      <main>
        <p>
          {email}
          <br></br>
          <img src={photoURL} alt=""></img>
          <br></br>
          {displayName}
        </p>
        <a href="/" onClick={WhenSignOut}>
          Se déconnecter
        </a>
        <MyResume />
      </main>
    );
  }
};

export default AuthCheck;
