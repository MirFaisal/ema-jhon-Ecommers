import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import firebaseApp from "../src/utility/firebase.init";

export const authContext = createContext();
const UserContext = ({ children }) => {
  // user state
  const [user, setUser] = useState();
  // loadin state
  const [isLoading, setLoading] = useState(true);

  // firebase auth
  const auth = getAuth(firebaseApp);

  // google auth provider
  const googleProvider = new GoogleAuthProvider();
  const singinWithGoole = () => signInWithPopup(auth, googleProvider);

  // singin in with email
  const singInWithEmail = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  //create user with wmail and password

  const createUserWithEmail = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  //upade profile
  const updateUserInfo = (userName) =>
    updateProfile(auth.currentUser, { displayName: userName });
  // context value

  // logout user
  const userLogout = () => signOut(auth);

  // get auth information
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      subscribe();
    };
  }, []);
  const contextValue = {
    user,
    isLoading,
    singinWithGoole,
    singInWithEmail,
    createUserWithEmail,
    updateUserInfo,
    userLogout,
  };
  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default UserContext;
