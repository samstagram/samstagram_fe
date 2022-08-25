import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "shared/api";
import axios from "axios";
import { setCookie } from "shared/cookie";
import { __getUsers } from "redux/modules/usersSlice";
import { useDispatch } from "react-redux";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      const google = async () => {
        try {
          const res = await axios.get(
            `${BASE_URL}/api/oauth/google/callback?code=${code}`
          );
          (await res.headers.authorization) &&
            setCookie("mycookie", res.headers.authorization);
          await dispatch(__getUsers());

          navigate("/");
        } catch (err) {
          window.alert("로그인에 실패하였습니다.");
        }
      };
      google();
    }
  }, []);

  return <div></div>;
};

export default GoogleLogin;
