/* eslint-disable no-unused-vars */
import { TextField, Button, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "../components/axios/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);
  const handleLoginButton = () => {
    navigate("/");
  };
  const handleRegisterButton = () => {
    navigate("/register");
  };
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ email: email, password: password });
    const response = await axios.post("/login", formData);
    setSuccess(true);
    console.log(response);
  };
  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <Container className="container">
        <Container
          className="login-container"
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5%",
            marginBottom: "15.7%",
          }}
        >
          <img
            className="logo-image"
            src="../../../Media/Logo.png"
            alt="Logo"
          />
          <Container>
            <TextField
              id="standard-basic email-input"
              label="Email"
              variant="standard"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={userRef}
              autoComplete="off"
            />
          </Container>
          <Container>
            <TextField
              id="standard-basic password-input"
              label="Password"
              variant="standard"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Container>
          <Container
            className="buttons-container"
            style={{ display: "flex", marginTop: "5%" }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={handleLoginButton}
            >
              Login
            </Button>
            <span>or</span>

            <Button
              variant="contained"
              color="error"
              onClick={handleRegisterButton}
            >
              Register
            </Button>
          </Container>
        </Container>
      </Container>
    </form>
  );
};

export default Login;
