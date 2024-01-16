/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "../components/axios/axios";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Label } from "@mui/icons-material";
const Register = () => {
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
          <Grid item xs={4}>
            <TextField label="First Name" />
            <TextField label="Last Name" />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Container>
    </form>
  );
};
export default Register;
