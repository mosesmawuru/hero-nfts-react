import React from "react";
import Elon1 from "../../assets/images/NFT/9.png";
import Elon2 from "../../assets/images/NFT/10.jpg";
import "./style.css";
export const MeetSlider = () => {
  return (
    <div>
      <div id="page">
        <div className="wrapper">
          <div className="before">
            <img
              className="content-image"
              src={Elon2}
              draggable="false"
              alt="mask1"
            />
          </div>
          <div className="after">
            <img
              className="content-image"
              src={Elon1}
              draggable="false"
              alt="mask2"
            />
          </div>
          <div className="scroller">
            <svg
              className="scroller__thumb"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <polygon
                points="0 50 37 68 37 32 0 50"
                style={{ fill: "#fff" }}
              />
              <polygon
                points="100 50 64 32 64 68 100 50"
                style={{ fill: "#fff" }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
