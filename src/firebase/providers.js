import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    // const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // // const credentials = GoogleAuthProvider.credentialFromResult( result );
    // const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User info
      displayName: "wandir",
      email: "wpf@gmail.com",
      photoURL: "",
      uid: 987654321,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    // const resp = await createUserWithEmailAndPassword(
    //   FirebaseAuth,
    //   email,
    //   password
    // );
    // const { uid, photoURL } = resp.user;

    // await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid: 987654321,
      photoURL: null,
      email: "wpf@gmail.com",
      displayName: "Wandir Pereira",
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    // const resp = await signInWithEmailAndPassword(
    //   FirebaseAuth,
    //   email,
    //   password
    // );
    // const { uid, photoURL, displayName } = resp.user;
    console.log("provider: ", email);
    console.log("provider: ", password);
    return {
      ok: true,
      uid: 987654321,
      photoURL: "",
      displayName: "Wandir Pereira",
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  // return await FirebaseAuth.signOut();
  return await null;
  // return {
  //   ok: false,
  //   uid: null,
  //   photoURL: null,
  //   email: null,
  //   displayName: null,
  //   status: "not-authenticated",
  // };
};
