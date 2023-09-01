import React from "react";

import profilePicture from "../../../static/assets/images/bio/kage-luger2.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right-column">
        Enim ipsa quisquam culpa nemo deserunt doloremque, dolore consectetur
        illum, quo error, iste sunt alias. Architecto vero nesciunt hic, odio
        quos laborum itaque delectus ex velit. Aliquid totam quibusdam optio?
        Enim ipsa quisquam culpa nemo deserunt doloremque, dolore consectetur
        illum, quo error, iste sunt alias. Architecto vero nesciunt hic, odio
        quos laborum itaque delectus ex velit. Aliquid totam quibusdam optio?
      </div>
    </div>
  );
}
