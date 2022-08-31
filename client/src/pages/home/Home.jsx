import React from "react";
import Login from "../../components/login/Login";
import logo from "../../logo.svg";
import axios from "axios";

export default function Home() {

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Login />
      </header>
    </div>
  );
}
