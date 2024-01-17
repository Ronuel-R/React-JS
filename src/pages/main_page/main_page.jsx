/* eslint-disable react/no-unescaped-entities */
import "./main_page.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import MainPageInfo from "../../services/main_page_action";
function MainPage() {
  return (
    <div className="page">
      <Header isMainPage={true} />
      <MainPageInfo />
      <Footer />
    </div>
  );
}
export default MainPage;
