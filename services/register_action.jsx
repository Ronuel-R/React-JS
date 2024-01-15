import { useEffect, useState } from "react";
import axios from "../components/axios/axios";
const Register = () => {
  const [inputType, setInputType] = useState("text"); // Initial state for input type
  const [phNumberList, setPhNumberList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [email, setEmail] = useState("");

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

  return (
    <div className="register-container">
      <h2>Register</h2>
      <span>
        <input
          type="text"
          className="underline-input"
          placeholder="First Name"
        />
        <input
          type="text"
          className="underline-input"
          placeholder="Last Name"
        />
        <select aria-placeholder="Sex" className="underline-input">
          <option hidden>Select Sex</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <input
          type={inputType}
          className="underline-input"
          placeholder="Birthday"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <input
          id="register-email"
          type="Email"
          className="underline-input"
          placeholder="Email"
        />
        <select
          aria-placeholder="Phone Codes"
          className="underline-input register-phone-code"
        >
          {phNumberList.map((entry) => (
            <option key={entry.code} value={entry.code}>
              {`${entry.code}`}
            </option>
          ))}
        </select>
        <input
          id="register-number"
          type="text"
          className="underline-input"
          placeholder="e.g. 9123456789"
        />
        <input
          id="register-verify-code"
          type="text"
          className="underline-input"
          placeholder="Code"
        />
        <a href="/">
          <button className="send-code">Send Code</button>
        </a>
      </span>

      <div className="buttons-container row">
        <a href="/">
          <button className="button">Register</button>
        </a>
        <div>
          <p>
            <span className="existing-user">Already have an account? </span>
            <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
