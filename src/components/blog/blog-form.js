import React, { Component } from "react";
import axios from "axios";
import { faGrinTongueSquint } from "@fortawesome/free-solid-svg-icons";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);

    return formData;
  }

  handleSubmit(event) {
    axios
      .post(
        "https://kageluger.devcamp.space/portfolio/portfolio_blogs",
        this.buildForm(),
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.handleSuccessfulFormSubmission(response.data.porfolio_blog);
        this.setState({
          title: "",
          blog_status: "",
        });
      })
      .catch((error) => {
        console.log("handlesubmiterror", error);
      });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          name="title"
          placeholder="Blog Title"
          value={this.state.title}
        ></input>
        <input
          type="text"
          onChange={this.handleChange}
          name="blog_status"
          placeholder="Blog Status"
          value={this.state.blog_status}
        ></input>

        <button>save</button>
      </form>
    );
  }
}
