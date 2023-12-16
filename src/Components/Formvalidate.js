import React, { useState } from "react";

const Formvalidate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(input));
  };

  const validatePassword = (input) => {
    setPasswordValid(input.length >= 8);
  };

  const validateConfirmpassword = (input) => {
    setConfirmPasswordValid(input === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert("Form Submitted Sucessfully");
    } else {
      alert("Can,t Submit the Form");
    }
  };

  return (
    <div>
      <div className="input-section">
        <label>Email:</label>
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          style={{ border: emailValid ? "2px solid green" : "2px solid red" }}
        />
        {!emailValid && <p>invalid email format</p>}
      </div>

      <div className="input-section">
        <label>Password:</label>
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          style={{
            border: passwordValid ? "2px solid green" : "2 px solid red",
          }}
        />
        {!passwordValid && <p>Password must be at least 8 characters </p>}
      </div>

      <div className="input-section">
        <label>Confirm Password:</label>
        <br />

        <input
          type="password"
          placeholder="Confirm-password"
          value={confirmpassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validateConfirmpassword(e.target.value);
          }}
          style={{
            border: confirmPasswordValid ? "2px solid green" : "2 px solid red",
          }}
        />
        {!confirmPasswordValid && <p>Password do not match</p>}
      </div>

      <button onClick={handleSubmit} className="button">
        SignUp
      </button>
    </div>
  );
};

export default Formvalidate;
