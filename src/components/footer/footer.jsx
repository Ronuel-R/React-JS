import { Paper, Typography } from "@mui/material";
// import "./footer.css";

function Footer() {
  return (
    <Paper
      square
      elevation={3}
      style={{
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#d32f2f",
        marginTop: "3%",
        width: "100%",
        bottom: "0",
      }}
    >
      <Typography variant="body2" color={"white"}>
        This Application is only meant for educational use only.
      </Typography>
    </Paper>
  );
}

export default Footer;
