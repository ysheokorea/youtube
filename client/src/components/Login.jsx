import React from "react";
import { useState } from "react";
import "./login.css";
import axios from "axios";

export default function Login({ setIsLogin, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    axios({
      url: "http://localhost:8123/login",
      method: "POST",
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    }).then((result) => {
      if (result.status === 200) {
        window.open('/', '_self')
      }
    });
  };

  return (
    <div>
      <div className="loginContainer">
        <div className="inputGroup">
          <label className="inputLabel">email</label>
          <input
            type="email"
            placeholder="email"
            className="inputValue"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="inputGroup">
          <label className="inputLabel">password</label>
          <input
            type="password"
            placeholder="password"
            className="inputValue"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button onClick={login} className="loginButton">Login</button>
      </div>
    </div>
  );
}
