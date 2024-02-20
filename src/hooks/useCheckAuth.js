import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const user = {
    uid: 987654321,
    email: "wpf@gmail.com",
    displayName: "Wandir Pereira",
    photoURL: "",
  };

  // useEffect(() => {
  //   onAuthStateChanged(FirebaseAuth, async (user) => {
  //     if (!user) return dispatchEvent(logout());
  //     const { uid, emal, displayName, photoURL } = user;
  //     dispatch(login({ uid, email, displayName, photoURL }));
  //   });
  // }, []);

  useEffect(() => {
    if (!user) return dispatchEvent(logout());
    const { uid, email, displayName, photoURL } = user;
    dispatch(login({ uid, email, displayName, photoURL }));
  }, []);

  return { status };
};
