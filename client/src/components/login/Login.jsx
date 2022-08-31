import axios from "axios";
import React from "react";
import "./login.css";

export default function Login() {
  const github = () => {
    window
      .open(
        "https://github.com/login/oauth/authorize" +
          `?client_id=${process.env.REACT_APP_GITHUB_CLIEND_ID}`,
        "_self"
      )
  };

  const google = () => {

  }

  const kakao = () => {

  }

  return (
    <div>
      <div className="loginContainer">
        <div className="inputGroup">
          <button className="loginButton" onClick={github}>
            <img src="../assets/git.jpg" alt="" className="buttonImg" />
          </button>
          <button className="loginButton" onClick={google}>
            <img src="../assets/google.png" alt="" className="buttonImg" />
          </button>
          <button className="loginButton" onClick={kakao}>
            <img src="../assets/kakao.png" alt="" className="buttonImg" />
          </button>
        </div>
      </div>
    </div>
  );
}
