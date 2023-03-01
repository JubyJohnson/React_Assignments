import * as React from "react";
import "./Login.css";

export class Login extends React.Component {
  constructor(props) {
    console.log("Calling the constructor");
    super(props);
    this.state = { userName: "", passWord: "" };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick() {
    console.log("calling click function");
    var user = document.getElementById("userName");
    var pass = document.getElementById("passWord");
    if (user.value === "" || pass.value === "") {
      alert("username/password cannot be blank");
    } else if (pass.value === null || pass.value === "") {
      alert("password cannot be blank");
    } else {
      if (pass.value.length < 6) {
        alert("password must contain more characters");
      }
    }
  }

  onChange(e) {
    this.setState({ userName: e.target.value });
    console.log("calling onChange function", this.state.userName);
  }

  render() {
    return (
      <div className="main-div">
        <div>
          <label>User name :</label>
          <input
            type="text"
            id="userName"
            value={this.state.userName}
            onChange={this.onChange}
            placeholder="User Name"
          ></input>
          <br />
          <label>password :</label>
          <input type="password" id="passWord" placeholder="Password"></input>
          <br />
          <button onClick={this.onClick}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
