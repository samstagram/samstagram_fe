import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "pages/ErrorPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
