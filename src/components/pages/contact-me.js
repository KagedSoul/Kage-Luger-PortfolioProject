import React from "react";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Fix the image size with website view size */}
      <div className="right-column ">
        {/* <h1 className="title">Contact Me</h1> */}

        <div className="contact-content">
          {/* <div className="content">
            Best days to contact me are weekdays, Tuesday - Friday, 3pm - 7pm. I
            will get back to you as quickly as I can.
          </div> */}

          <div className="contact-info">
            <div>
              <FontAwesomeIcon icon={"mobile"}></FontAwesomeIcon>
            </div>
            <div>651-464-3300</div>
          </div>

          <div className="contact-info">
            <div>
              <FontAwesomeIcon icon={"envelope"} />
            </div>
            <div>kage.luger@me.com</div>
          </div>

          <div className="contact-info">
            <div>
              <FontAwesomeIcon icon={"map-marker-alt"} />
            </div>
            <div>Coon Rapids, MN</div>
          </div>
        </div>
      </div>
    </div>
  );
}
