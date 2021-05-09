import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";

// mainly import styles
import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      url: "",
      category: "eCommerce",
      position: "",
      thum_image: "",
      banner_image: "",
      logo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componetConfig = this.componetConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
  }

  componetConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFileTypeIcon: true,
      postUrl: "https://httpbin.org/post",
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1,
    };
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_item[name]", this.state.name);
    formData.append("portfolio_item[description]", this.state.description);
    formData.append("portfolio_item[url]", this.state.url);
    formData.append("portfolio_item[category]", this.state.category);
    formData.append("portfolio_item[position]", this.state.position);
    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    //
    axios
      .post(
        "https://kageluger.devcamp.space/portfolio/portfolio_items",
        this.buildForm(),
        { withCredentials: true }
      )
      .then((response) => {
        this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);
      })
      .catch((error) => {
        console.log("handleSubmit portfolio error", error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Porftolio Form Manager</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="url"
              placeholder="Url"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>

          <div className="">
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={this.state.position}
              onChange={this.handleChange}
            />

            <select
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value="eCommerce">eCommerce</option>
              <option value="Schedualing">Schedualing</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>
          <div>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <div className="image-uploaders">
            <DropzoneComponent
              config={this.componetConfig()}
              djsConfig={this.djsConfig()}
            ></DropzoneComponent>
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
