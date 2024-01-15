import "./header.css";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Header(isMainPage) {
  // const [click, setClick] = useState(false);
  return (
    <AppBar
      className="header"
      color="error"
      style={{ fontFamily: "Kelly Slab" }}
    >
      <Toolbar variant="dense">
        {isMainPage && (
          <Toolbar className="header-container">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, zIndex: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <ul>
              <li className="nav-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="/">About</a>
              </li>
              <li className="nav-item">
                <a href="/">Terms and Condition</a>
              </li>
              <li className="nav-item">
                <a href="/">FAQ</a>
              </li>
            </ul>
          </Toolbar>
        )}
        <Grid>
          <Typography
            variant="h6"
            className="header-title"
            style={{ fontFamily: "Kelly Slab" }}
          >
            Accessible Personal
            <br />
            Identity Recognition
          </Typography>
        </Grid>
        {isMainPage && (
          <Grid className="right-container">
            <ul>
              <li className="nav-item-right">
                <a href="/login">Logout</a>
              </li>
            </ul>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
