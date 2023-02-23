import React, { useState } from "react";
import "./style.css";

function RegistrationForm() {
  // const [sFirstName, setsFirstName] = useState(null);
  // const [lastName, setLastName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password,setPassword] = useState(null);
  // const [confirmPassword,setConfirmPassword] = useState(null);
  const [sFormValues, setsFormValues] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    console.log(value, "value name");
    if (id === "firstName") {
      setsFormValues({
        ...sFormValues,
        firstName: value,
      });
    }
    if (id === "lastName") {
      setsFormValues({
        ...sFormValues,
        lastName: value,
      });
    }
    if (id === "qualification") {
      setsFormValues({
        ...sFormValues,
        qualification: value,
      });
    }

    if (id === "email") {
      setsFormValues({
        ...sFormValues,
        email: value,
      });
    }
    if (id === "password") {
      setsFormValues({
        ...sFormValues,
        password: value,
      });
    }
    if (id === "confirmPassword") {
      setsFormValues({
        ...sFormValues,
        confirmPassword: value,
      });
    }
  };

  const handleSubmit = () => {
    console.log(sFormValues);
  };

  const handleSubmit1 = () => {
    console.log(sFormValues);
  };

  return (
    <div className="form">
      <h1>{sFormValues.name}</h1>
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            {" "}
            Last Name
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            className="form__input"
            placeholder="LastName"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="qualification">
          <label>Qualification :</label>
          <select>
            <option value="Selection">Select....</option>
            <option value="B-Tech">B-Tech</option>
            <option value="M-Tech">M-Tech</option>
            <option value="BBA">BBA</option>
          </select>
        </div>

        <div className="gender">
          <label>Gender:</label>
          <input
            type="radio"
            checked="true"
            name="user_gender"
            onChange={(e) => handleInputChange(e)}
          />
          Male
          <br />
          <input
            type="radio"
            name="user_gender"
            onChange={(e) => handleInputChange(e)}
          />
          Female
        </div>

        <div className="email">
          <label className="form__label" for="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            {" "}
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            {" "}
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="btn" onClick={handleSubmit}>
          Register
        </button>
      </div>
      <div class="footer">
        <button type="submit" class="btn" onClick={handleSubmit1}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
