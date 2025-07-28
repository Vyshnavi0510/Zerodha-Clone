import React from "react";
import "../ZerodhaLogin/ZerodhaLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function ZerodhaLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [successRes, newResponse] = useState('');
  const navigate = useNavigate();
  function handleUserName(event) {
    console.log("onChange", event.target.value);
    setUsername(event.target.value);
  }
  function handlePassword(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  async function handleLogin() {
    try {
      const url = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: username,
          password: password,
        }
      );
      const response = await url.data.access_token;
      // const rejection = await url;
      console.log(response);
      console.log(username, password);
      if (username === "john@mail.com" && password === "changeme") {
        localStorage.setItem("access_token", response);
        navigate("/DashBoard");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      alert(error);
    }

    // ).then(function (posResponse, rejection) {
    //     console.log(posResponse, rejection);
    //     newResponse(posResponse.data.access_token);
    // })
  }
  return (
    <>
      <div className="login-container">
        <div className="container">
          <div className="flex-container">
            <div className="login-section">
              <img
                src="https://kite.zerodha.com/static/images/kite-logo.svg"
                width={50}
              />
            </div>
            <div className="form-group">
              <h2>Login to Kite</h2>
              <label> Phone Or User ID</label>
              <input
                type="text"
                placeholder="Phone Or User ID"
                required
                onChange={handleUserName}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                onChange={handlePassword}
              />
              <button className="login-btn" onClick={handleLogin}>
                Log In
              </button>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot user ID or password?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ZerodhaLogin;
