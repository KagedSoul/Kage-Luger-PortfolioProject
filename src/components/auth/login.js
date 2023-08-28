import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorTxt: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorTxt: "",
    });
  }
  handleSubmit(event) {
    axios
      .post(
        "https://api.devcamp.space/sessions",
        {
          client: {
            email: this.state.email,
            password: this.state.password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth();
        } else {
          this.setState({
            errorTxt: "wrong email/pssword",
          });
          this.props.handleUnsuccessfulAuth();
        }
      })
      .catch((error) => {
        this.setState({
          errorTxt: "An Error was Encounter",
        });
        this.props.handleUnsuccessfulAuth();
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
        <div>{this.state.errorTxt}</div>
        <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
          {/* as data is being input, a handeler interperates the data */}

          <div className="form-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    );
  }
}
