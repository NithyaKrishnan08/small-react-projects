import { useState } from "react";
import "../styles/form.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();
    
    if (username.length > 8) {
      setUsernameError("");
      setUserColor("green");
    } else {
      setUsernameError("Username must be at least 8 characters long");
      setUserColor("red");
    }

    if (email.includes("@gmail")) {
      setEmailError("");
      setEmailColor("green");
    } else {
      setEmailError("Email must be a gmail account");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setPasswordError("");
      setPasswordColor("green");
    } else {
      setPasswordError("Password must be at least 8 characters long");
      setPasswordColor("red");
    }

    if (confirmPassword === password) {
      setConfirmPasswordError("");
      setConfirmPasswordColor("green");
    } else {
      setConfirmPasswordError("Passwords do not match");
      setConfirmPasswordColor("red");
    }
  }

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error">{usernameError}</p>

          <input
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{emailError}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{passwordError}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{confirmPasswordError}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;

