import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", passWord: "" };
    this.userNameChange = this.userNameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.onClick = this.onClick.bind(this);
    console.log("Constructor calling...");
  }

  userNameChange(e) {
    this.setState({ userName: e.target.value });
    console.log("onChange calling...", this.state.userName);
  }
  passwordChange(e) {
    this.setState({ passWord: e.target.value });
    console.log("onChange calling...", this.state.passWord);
  }
  onClick() {
    console.log("onClick calling...");

    if (this.state.userName === "") {
      alert("Please enter User name");
    } else if (this.state.passWord === "") {
      alert("Please enter Password");
    } else if (this.state.passWord.length < 6) {
      alert("Password should be minimum 6 character");
    } else if (
      this.state.userName.trim() === "juby" &&
      this.state.passWord.trim() === "123456"
    ) {
      alert("Login Successfull");
    } else {
      alert("Invalid User name or Password");
    }
  }

  render() {
    console.log("Render calling...");
    return (
      <div className="main-div">
        <div>
          <label>User name</label>
          <input
            type="text"
            id="userName"
            value={this.state.userName}
            onChange={this.userNameChange}
            placeholder="User Name"
          ></input>
          <br />
          <label>password</label>
          <input
            type="password"
            id="passWord"
            value={this.state.passWord}
            onChange={this.passwordChange}
            placeholder="Password"
          ></input>
          <br />
          <button onClick={this.onClick}>Login</button>
        </div>
        <div>
          <label>User Name: {this.state.userName}</label>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount calling...");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate calling...");
  }

  componentDidCatch() {
    console.log("componentDidCatch calling...");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount calling...");
  }
}

export default Login;
