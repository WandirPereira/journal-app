import React, { useEffect } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";

export const AppRouter = () => {
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

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />

      {/* Login e Registro */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* JournalApp */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}

      <Route />
    </Routes>
  );
};
