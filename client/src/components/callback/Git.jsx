import axios from "axios";
import React, { useContext, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/LoginContext";

export default function Git() {
  const { accessToken, setAccessToken, loginType, setLoginType } =
    useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    try {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    if (code) {
      axios({
        url: "http://localhost:8112/auth/accesstoken",
        method: "post",
        data: {
          code: code,
        },
      }).then((result) => {
        const accessToken = result.data.split("=")[1].split("&")[0];
        setAccessToken(accessToken);
        setLoginType("GIT");
        navigate("/");
      });
    }
  } catch (error) {}

  }, []);

  return <div>Git Callback</div>;
}
