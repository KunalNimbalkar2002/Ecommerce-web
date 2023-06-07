import React, { useState } from "react";
import "./ThirdNavBar.css";

const ThirdNavBar = () => {
  const [onHoverWindowWomen, setonHoverWindowWomen] = useState(false);
  const handleonHoverWindowWomen = () => {
    setonHoverWindowWomen(true);
  };
  const handleonHoverWindowWomenLeave = () => {
    setonHoverWindowWomen(false);
  };

  return (
    <div className="ThirdNavBar-flex-div">
      <div className="ThirdNavBar-width-div">
        <div className="ThirdNavBar-main-div">
          <p
            className="ThirdNavBar-main-div-para-tag"
            onMouseEnter={handleonHoverWindowWomen}
          >
            Women
          </p>
          <p className="ThirdNavBar-main-div-para-tag">Men</p>
          <p className="ThirdNavBar-main-div-para-tag">Kids</p>
          <p className="ThirdNavBar-main-div-para-tag">Sportswear</p>
          <p className="ThirdNavBar-main-div-para-tag">Sales & Deals</p>
        </div>

        {onHoverWindowWomen && (
          <div
            className="ThirdNavBar-main-div-two"
            onMouseLeave={handleonHoverWindowWomenLeave}
          >
            <div className="ThirdNavBar-main-div-two-padding">
              <h1>On Hover Content</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThirdNavBar;
