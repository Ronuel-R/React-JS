import "./Login_page.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Box } from "@mui/material";
import Login from "./login_action";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <Box className="page">
      <Header isMainPage={false} />
      <Login
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </Box>
  );
}
export default LoginPage;
