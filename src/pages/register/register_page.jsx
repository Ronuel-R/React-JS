import "./register_page.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Register from "../../services/register_action";

function RegisterPage() {
  return (
    <div className="page">
      <Header isMainPage={false} />
      <Register />
      <Footer />
    </div>
  );
}
export default RegisterPage;
