/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import axios from "../components/axios/axios";
import { Box, Container, Grid } from "@mui/material";

const MainPageInfo = () => {
  const [idList, setIdList] = useState([]);
  const [announcementList, setAnnouncementList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response_Id = await axios.get("/sample_id_dict");
        setIdList(response_Id.data);
        const response_announcement = await axios.get(
          "/sample_announcement_dict"
        );
        setAnnouncementList(response_announcement.data);
      } catch (error) {
        console.error("Error fetching phone number codes:", error);
      }
    };
    fetchData();
  });
  return (
    <Container maxWidth="xlg">
      <Container maxWidth="md">
        <Box sx={{ marginTop: "15%" }}>
          <span className="announcement-header">
            <h4>Announcement</h4>
          </span>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            border: "2px solid rgb(2, 2, 2)",
          }}
        >
          <Grid item xs={6}>
            <Container
              style={{
                overflowY: "scroll",
                overflowX: "hidden",
                height: "250px",
                textAlign: "center",
              }}
            >
              {announcementList.map((announcement) => (
                <a href={announcement.value} key={announcement.value}>
                  <Container
                    style={{
                      height: "75px",
                      border: "2px solid rgb(2, 2, 2)",
                      marginTop: "1%",
                    }}
                  >
                    <p>{announcement.title}</p>
                  </Container>
                </a>
              ))}
            </Container>
          </Grid>
          <Grid item xs={6}>
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
          </Grid>
        </Grid>
      </Container>

      <div className="id-container">
        <span className="id-header">
          <h4>Available ID's</h4>
          <div className="id-list">
            {idList.map((entry) => (
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
    </Container>
  );
};
export default MainPageInfo;
