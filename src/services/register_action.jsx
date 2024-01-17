/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "../components/axios/axios";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Label } from "@mui/icons-material";
const Register = () => {
  const navigate = useNavigate();
  const [inputType, setInputType] = useState("text"); // Initial state for input type
  const [phNumberList, setPhNumberList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [countryNumber, setCountryNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/phone_num_codes_dict");
        setPhNumberList(response.data);
      } catch (error) {
        console.error("Error fetching phone number codes:", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    navigate("/login");
  };
  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };
  const changeGender = (event) => {
    setGender(event.target.value);
  };
  const changeCountryCode = (event) => {
    setCountryNumber(event.target.value);
  };
  const handlePhoneNumberKeyPress = (e) => {
    if (e.target.value === "" && e.key === "0") {
      e.preventDefault();
    }
  };

  const handleSubmit = () => {};
  return (
    <form className="registerForm" onSubmit={handleSubmit}>
      <Container className="register-container">
        <h2>Register</h2>
        <Grid
          className="register-fields"
          container
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            item
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <TextField label="First Name" fullWidth />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Last Name" fullWidth />
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <TextField label="Email" type="email" fullWidth />
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <TextField label="Password" type="password" fullWidth />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Confirm Password" type="password" fullWidth />
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id="select-label">Gender</InputLabel>
                <Select
                  label="Gender"
                  labelId="select-label"
                  value={gender}
                  onChange={changeGender}
                  fullWidth
                >
                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                type={inputType}
                label="Birthday"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={1.8}>
              <FormControl fullWidth>
                <InputLabel id="select-label-country">Country Codes</InputLabel>
                <Select
                  label="Country Codes"
                  labelId="select-label-country"
                  value={countryNumber}
                  onChange={changeCountryCode}
                  fullWidth
                >
                  {phNumberList.map((entry) => (
                    <MenuItem key={entry.code} value={entry.code}>
                      {`${entry.code}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2.2}>
              <TextField
                label="Phone Number"
                sx={{ marginRight: "0.5em" }}
                value={mobileNumber}
                onKeyPress={handlePhoneNumberKeyPress}
                onChange={(e) => setMobileNumber(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2.5}>
              <TextField
                label="Verification Code"
                value={verifyCode}
                onChange={(e) => setVerifyCode(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={1.5}>
              <Button variant="contained" color="error">
                Send Code
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={handleButtonClick}
              >
                Register
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={3} fullWidth>
              <p>
                <span className="existing-user">Already have an account? </span>
                <a href="/login">Sign in</a>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};
export default Register;
