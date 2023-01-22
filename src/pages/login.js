import "./login.css";
import React from "react";
import { createUser, signInUser } from "../backend/firebaseAuth";
import { setPhoneNumber } from "../backend/phoneNumbers"
import { getUser } from "../backend/getUser"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      phonenumber: "",
      showSignIn: true,
      clicked: false
    };
    this.handleusername = this.handleusername.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.handlephonenumber = this.handlephonenumber.bind(this);
    this.handleClickShowSignIn = this.handleClickShowSignIn.bind(this);
    this.sumbitCreateAccount = this.sumbitCreateAccount.bind(this);
    this.sumbitLogin = this.sumbitLogin.bind(this);
  }

  handleusername(event) {
    this.setState({
      ...this.state,
      username: event.target.value,
    });
  }
  handlepassword(event) {
    this.setState({
      ...this.state,
      password: event.target.value,
    });
  }
  handlephonenumber(event) {
    this.setState({
      ...this.state,
      phonenumber: event.target.value,
    });
  }
  handleClickShowSignIn(event) {
    this.setState({
      ...this.state,
      showSignIn: !this.state.showSignIn,
    });
  }
  sumbitCreateAccount(event) {
    event.preventDefault();
    createUser(this.state.username, this.state.password);
    setTimeout(() => {
        setPhoneNumber(this.state.phonenumber, getUser().uid);
    }, 1000);
    window.location.href = `/`;
  }
  sumbitLogin(event) {
    event.preventDefault();
    signInUser(this.state.username, this.state.password);
    window.location.href = `/`;
  }

  render() {
    return (
      <Col>
      <Card body>
      <div className="wrapper">
        <img src="https://cdn.discordapp.com/attachments/1066426699669057737/1066526497747243058/IMG_0391.png" alt="plant" ></img>
        <div className="container">
            {this.state.showSignIn ? (
              <div className="Login">
                <form onSubmit={this.sumbitLogin}>
                  <div>
                    <h1>Sign In</h1>
                  </div>
                  <div className="info">
                    <label>Username:</label>
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.handleusername}
                      required
                    />
                  </div>
                  <div className="info">
                    <label>Password:</label>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.handlepassword}
                      required
                    />
                  </div>
                  <div className="info">
                    <input type="submit" value="Sign In"/>
                  </div>
                </form>
                <button id='noacc' onClick={this.handleClickShowSignIn}>{this.state.showSignIn ? `Don't have an acconut?` : `Sign In`}</button>
              </div>
            ) : (
              <div className="Create-account">
                <div>
                  <h1>Create Account</h1>
                </div>
                <form onSubmit={this.sumbitCreateAccount}>
                  <div className="info">
                    <label>Username:</label>
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.handleusername}
                      required
                    />
                  </div>
                  <div className="info">
                    <label>Password:</label>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.handlepassword}
                      required
                    />
                  </div>
                  <div className="info">
                    <label>Phone number:</label>
                    <input
                      type="text"
                      value={this.state.phonenumber}
                      onChange={this.handlephonenumber}
                      required
                    />
                  </div>
                  <div className="info">
                    <input type="submit" value="Create Account"/>
                  </div>
                </form>
              </div>
            )}
        </div>
        
        
      </div>
      </Card>
      <footer className="footer">
          <p className="text-footer">Copyright ©-All rights are reserved</p>
        </footer>
      </Col>
      
    )
  }
}
