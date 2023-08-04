import React from "react";
import { Link } from "react-router-dom";
import striptags from "striptags";
import Truncate from "react-truncate";

const BlogItem = (props) => {
  // destuctoring objects with keys

  const {
    id,
    blog_status,
    content,
    title,
    featured_image_url,
  } = props.blogItem;

  return (
    <div>
      <Link to={`/b/${id}`}>
        <h1>{title}</h1>
      </Link>
      <div>
        <Truncate
          lines={5}
          ellipsis={
            <span>
              ...<Link to={`/b/${id}`}>Read More</Link>
            </span>
          }
        >
          {striptags(content)}
        </Truncate>
      </div>
    </div>
  );
};

console.log(BlogItem, "Blog Item jsGenerator");

export default BlogItem;
