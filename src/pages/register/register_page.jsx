import "./register_page.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useState } from "react";

function RegisterPage() {
  const [inputType, setInputType] = useState("text"); // Initial state for input type

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };
  const phone_num_codes_dict = [
    { code: "+63", country: "Philippines", abbr: "PH" },
    { code: "+1", country: "United States", abbr: "US" },
    { code: "+44", country: "United Kingdom", abbr: "UK" },
    { code: "+91", country: "India", abbr: "IN" },
    { code: "+81", country: "Japan", abbr: "JP" },
    { code: "+86", country: "China", abbr: "CN" },
    { code: "+33", country: "France", abbr: "FR" },
  ];
  return (
    <div className="page">
      <Header isMainPage={false} />
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
            {phone_num_codes_dict.map((entry) => (
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
      <Footer />
    </div>
  );
}
export default RegisterPage;
