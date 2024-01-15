import { TextField, Button, Container } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Login = ({ email, password, setEmail, setPassword, handleSubmit }) => {
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
