import React from "react";
import "./NavBar.css";
import Logo from "../../Images/OIP.jpeg";
import { GoLocation } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSearch, BsFlag, BsCart4 } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="main-website-div">
      <div className="nav-bar-main-div">
        <div className="nav-bar-width-div">
          <div className="nav-bar-main-before-flex-div">
            <div className="nav-bar-for-flex">
              <div className="nav-bar-logo-div">
                <img src={Logo} className="logo-img-svg-tag" />
              </div>

              <div className="select-location-main-div">
                <div className="location-logo-div">
                  <GoLocation className="location-icon" />
                </div>
                <div className="location-detail-div">
                  <p>Hello</p>
                  <h3>Select Your Address</h3>
                </div>
              </div>

              <div className="input-search-main-div">
                <div className="drop-down-main-div">
                  <p>All</p>
                  <IoMdArrowDropdown />
                </div>
                <div>
                  <input
                    className="navbar-search-input-tag"
                    placeholder="Search Amazon.in"
                  />
                </div>
                <div className="search-logo-div">
                  <BsSearch
                    style={{ height: "25px", width: "25px", cursor: "pointer" }}
                  />
                </div>
              </div>

              <div className="navbar-flag-main-div">
                <div>
                  <BsFlag />
                </div>
                <div className="country-name">
                  <p>EN</p>
                </div>
                <div>
                  <IoMdArrowDropdown />
                </div>
              </div>

              <div className="sign-in-main-div-one">
                <div className="sign-in-main-div-sub-one">
                  <p>Hello, Sign in</p>
                  <h3>Accounts & Lists</h3>
                  {/* <IoMdArrowDropdown /> */}
                </div>
                {/* <div className="sign-in-main-div-two">
                  <div className="sign-in-main-div-two-one"></div>
                </div> */}
              </div>

              <div className="return-nd-order-main-div">
                <p>Returns</p>
                <h3>& Orders</h3>
              </div>

              <div className="cart-main-div">
                <BsCart4
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                />
                <p>Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="nav-progressive-content-main-div">
        <div className="nav-progressive-content-width-div">
         <div className="nav-progressive-content-main-before-flex-div"> 
         <div className="nav-progressive-content-for-flex">

         </div>
         </div>
        </div>
      </div> */}
    </div>
  );
};

export default NavBar;
