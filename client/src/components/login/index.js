import React, { useState, useEffect } from "react";
import {
  usePostLoginMutation,
  usePostSignUpMutation,
} from "../../state/api";

const Login = ({ setUser, setSecret }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, resultLogin] = usePostLoginMutation();
  const [triggerSignUp] = usePostSignUpMutation();
  const handleLogin = () => {
    triggerLogin({ userName, password });
  };

  const handleRegister = () => {
    triggerSignUp({ userName, password });
  };

  useEffect(() => {
    if (resultLogin.data?.response) {
      setUser(userName);
      setSecret(password);
    }
  }, [resultLogin.data]); //eslint-disable-line

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="title">CHAT-APP</h2>
        <p
          className="register-change"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Already a User?" : "Are u a new user??"}
        </p>
        <div>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="password"
            className="login-input"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-actions">
          {isRegister ? (
            <button type="button" onClick={handleRegister}>
              Register
            </button>
          ) : (
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
