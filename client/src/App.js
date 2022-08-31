import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import Git from "./components/callback/Git";
import Google from "./components/callback/Google";
import Kakao from "./components/callback/Kakao";
import { UserContext } from "./context/LoginContext";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [loginType, setLoginType] = useState("");

  useEffect(() => {
    if (accessToken) {
      switch (loginType) {
        case "GIT":
          axios({
            url: "https://api.github.com/user",
            method: "get",
            headers: {
              'Authorization': `token ${accessToken}`,
            }
          }).then((result) => {
            console.log("user info from github", result);
          }).catch(error=>{console.log(error)});
    
          break;
        case "GOOGLE":
          break;
        case "KAKAO":
          break;
        default:
          break;
      }
    }
  }, [accessToken]);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider
          value={{ accessToken, setAccessToken, loginType, setLoginType }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/callback/git" element={<Git />} />
            <Route path="/auth/callback/google" element={<Google />} />
            <Route path="/auth/callback/kakao" element={<Kakao />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
