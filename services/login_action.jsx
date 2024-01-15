import { TextField, Button, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "../components/axios/axios";

// eslint-disable-next-line react/prop-types
const Login = () => {
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
            <a draggable="false">
              <button
                type="submit"
                style={{ background: "#d32f2f", color: "white" }}
              >
                Login
              </button>
            </a>
            <span>or</span>
            <a href="/register" draggable="false">
              <Button variant="contained" color="error">
                Register
              </Button>
            </a>
          </Container>
        </Container>
      </Container>
    </form>
  );
};

export default Login;
