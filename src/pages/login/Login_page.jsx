import "./Login_page.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Box } from "@mui/material";
import Login from "../../services/login_action";
function LoginPage() {
  return (
    <Box className="page">
      <Header isMainPage={false} />
      <Login />
      <Footer />
    </Box>
  );
}
export default LoginPage;
