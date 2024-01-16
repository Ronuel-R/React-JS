/* eslint-disable react/no-unescaped-entities */
import "./main_page.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function MainPage() {
  // eslint-disable-next-line no-unused-vars
  const API_URL_ANNOUNCEMENT = "http://localhost:3500/sample_announcement_dict";
  // eslint-disable-next-line no-unused-vars
  const API_URL_ID = "http://localhost:3500/sample_id_dict";

  const sample_id_dict = [
    { img: "../../../Media/Logo.png", value: "1" },
    { img: "../../../Media/Logo.png", value: "2" },
    { img: "../../../Media/Logo.png", value: "3" },
    { img: "../../../Media/Logo.png", value: "4" },
    { img: "../../../Media/Logo.png", value: "5" },
    { img: "../../../Media/Logo.png", value: "6" },
    { img: "../../../Media/Logo.png", value: "7" },
    { img: "../../../Media/Logo.png", value: "8" },
    { img: "../../../Media/Logo.png", value: "9" },
    { img: "../../../Media/Logo.png", value: "10" },
  ];
  const sample_announcement_dict = [
    { value: "", title: "Announcement 1" },
    { value: "", title: "Announcement 2" },
    { value: "", title: "Announcement 3" },
    { value: "", title: "Announcement 4" },
    { value: "", title: "Announcement 5" },
    { value: "", title: "Announcement 6" },
    { value: "", title: "Announcement 7" },
    { value: "", title: "Announcement 8" },
    { value: "", title: "Announcement 9" },
    { value: "", title: "Announcement 10" },
  ];
  return (
    <div className="page">
      <Header isMainPage={true} />
      <div className="container">
        <div className="title-container-announcement">
          <span className="announcement-header">
            <h4>Announcement</h4>
          </span>
        </div>
        <div className="announcement">
          <div className="announcement-container">
            <div className="announcement-list">
              {sample_announcement_dict.map((announcement) => (
                <a href={announcement.value} key={announcement.value}>
                  <div className="announcement-content">
                    <p>{announcement.title}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="announcement-info">
              <b>Announcement 1</b>
              <p>We are excited to announce a special event coming up!</p>
              <p>
                Join us for an informative webinar on the latest industry
                trends.
              </p>
              <p>Date: January 15, 2024</p>
              <p>Time: 2:00 PM - 4:00 PM</p>
              <p>Location: Virtual Event</p>
              <p>Don't miss out on this great opportunity. See you there!</p>
              <p>Don't miss out on this great opportunity. See you there!</p>
              <p>Don't miss out on this great opportunity. See you there!</p>
              <p>Don't miss out on this great opportunity. See you there!</p>
            </div>
          </div>
        </div>

        <div className="id-container">
          <span className="id-header">
            <h4>Available ID's</h4>
            <div className="id-list">
              {sample_id_dict.map((entry) => (
                <div className="id-list-content" key={entry.value}>
                  <img className="logo-image" src={entry.img} alt="Logo" />
                  <a href="/">
                    <button className="button" value={entry.value}>
                      Generate QR
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </span>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default MainPage;
