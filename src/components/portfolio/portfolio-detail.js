import React, { Component } from "react";
import axios from "axios";

// banner_image_url
// :
// "https://devcamp-space.s3.amazonaws.com/7Sv57Q4gGsa2URMGfaVrr42d?response-content-disposition=inline%3B%20filename%3D%22devcamp.jpg%22%3B%20filename%2A%3DUTF-8%27%27devcamp.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20230819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230819T002145Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=4e4f033ec0204a9b2793094499cb2a05ce8f4d129915baff7ced783eac74488f"
// category
// :
// "Education"
// column_names_merged_with_images
// :
// (9) ['id', 'name', 'description', 'url', 'category', 'position', 'thumb_image', 'banner_image', 'logo']
// description
// :
// "An online education platform for WebDev"
// id
// :
// 25453
// logo_url
// :
// "https://devcamp-space.s3.amazonaws.com/XdsE5n1duuf8boZ6owJMK6Zf?response-content-disposition=inline%3B%20filename%3D%22devcamp.png%22%3B%20filename%2A%3DUTF-8%27%27devcamp.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20230819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230819T002145Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=fc9c38721d8051a701818f65f34bf450db36181ddf02739aa36c51cc0aa19720"
// name
// :
// "DevCamp"
// position
// :
// 11
// thumb_image_url
// :
// "https://devcamp-space.s3.amazonaws.com/yTVpDYDLdzedeHNdGweUNiqD?response-content-disposition=inline%3B%20filename%3D%22devcamp.jpg%22%3B%20filename%2A%3DUTF-8%27%27devcamp.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20230819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230819T002145Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=a7e9c620f91fe9c72fa0a0174c978fc60e669796bab37a57dc8720d819b7d308"
// url
// :
// "http://www.devcamp.com"

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {},
    };
  }

  componentWillMount() {
    this.getPorfolioItem();
  }

  getPorfolioItem() {
    axios
      .get(
        `https://kageluger.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          portfolioItem: response.data.portfolio_item,
        });
        console.log(this.state.portfolioItem);
      })
      .catch((error) => {
        console.log("getportfolioItem error", error);
      });
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      id,
      logo_url,
      name,
      thumb_image_url,
      url,
    } = this.state.portfolioItem;
    return (
      <div className="portfolio-detail-wrapper">
        <div className="upper-row">
          <div
            className={"portfolio-img-background-detail"}
            style={{
              backgroundImage: "url(" + banner_image_url + ")",
            }}
          >
            <img className="logo-img" src={logo_url}></img>
          </div>
        </div>

        <div className="lower-row">
          <p>{description}</p>
          <div>
            <a href={url} className="site-link" target="_blank">
              Visit {name}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
