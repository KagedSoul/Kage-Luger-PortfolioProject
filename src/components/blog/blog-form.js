import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";

import RichTextEditor from "../forms/rich-text-editor";

import { faGrinTongueSquint } from "@fortawesome/free-solid-svg-icons";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      blog_status: "",
      content: "",
      featured_image: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(
      this
    );

    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind(this);

    this.featuredImageRef = React.createRef();
  }

  componentWillMount() {
    if (this.props.editMode) {
      this.setState({
        id: this.props.blogToEdit.id,
        title: this.props.blogToEdit.title,
        blog_status: this.props.blogToEdit.blog_status,
      });
    }
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post",
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1,
    };
  }

  handleFeaturedImageDrop() {
    return {
      addedfile: (file) => this.setState({ featured_image: file }),
    };
  }

  handleRichTextEditorChange(content) {
    //String Value
    // this.setState({
    //   content: content
    //   This is an alternitate method since the content arument is the same as the the key
    // })

    this.setState({ content });
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);
    formData.append("portfolio_blog[content]", this.state.content);

    if (this.state.featured_image) {
      formData.append(
        "portfolio_blog[featured_image]",
        this.state.featured_image
      );
    }

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
        if (this.state.featured_image) {
          this.featuredImageRef.current.dropzone.removeAllFiles();
        }

        console.log(response);
        this.setState({
          title: "",
          blog_status: "",
          content: "",
          featured_image: "",
        });

        this.props.handleSuccessfullFormSubmission(
          response.data.portfolio_blog
        );
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
      <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
        <div className="two-column">
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
        </div>

        <div className="one-column">
          <RichTextEditor
            handleRichTextEditorChange={this.handleRichTextEditorChange}
            editMode={this.props.editMode}
            contentToEdit={
              this.props.editMode && this.props.blogToEdit.content
                ? this.props.blogToEdit.content
                : null
            }
          />
        </div>
        <div className="image-uploaders">
          <DropzoneComponent
            ref={this.featuredImageRef}
            config={this.componentConfig()}
            djsConfig={this.djsConfig()}
            eventHandlers={this.handleFeaturedImageDrop()}
          >
            <div className="dz-message">Featured Image</div>
          </DropzoneComponent>
        </div>

        <button className="btn">save</button>
      </form>
    );
  }
}
