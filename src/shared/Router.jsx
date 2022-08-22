import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "pages/ErrorPage";
import GoogleLogin from "components/GoogleLogin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { usersAction, __getUsers } from "redux/modules/usersSlice";

const Router = () => {
  const dispatch = useDispatch();

  const { user, isLogin, isLoading, error } = useSelector(
    (state) => state.users
  );

  console.log(user);
  console.log(isLogin);

  useEffect(() => {
    dispatch(__getUsers());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={isLogin ? <MainPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={isLogin ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route
        path="/api/oauth/google/callback"
        element={isLogin ? <Navigate to="/" /> : <GoogleLogin />}
      />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
