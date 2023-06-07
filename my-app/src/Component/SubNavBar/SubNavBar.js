import React from "react";
import "./SubNavBar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";

const SubNavBar = () => {
  return (
    <div className="sub-main-web-div">
      <div className="sub-nav-bar-main-div">
        <div className="sub-nav-bar-width-div">
          <div className="sub-nav-main-flex-div">
            <div className="sub-nav-bar-for-flex">
              <div
                className="sub-nav-main-content-div"
                style={{ display: "flex", alignItems: "center" }}
              >
                <RxHamburgerMenu style={{ display: "flex", color: "white" }} />
                <p>All</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Amazon miniTV</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Sell</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Best Sellers</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Mobiles</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Today's Deals</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Customer Service</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>New Releases</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Electronics</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p style={{ display: "flex" }}>Prime</p>
                <IoMdArrowDropdown
                  style={{ display: "flex", color: "white" }}
                />
              </div>
              <div className="sub-nav-main-content-div">
                <p>Home & Kitchen</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Amazon Pay</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Fashion</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Computers</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Beauty & Personal Care</p>
              </div>
              <div className="sub-nav-main-content-div">
                <p>Books</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavBar;
