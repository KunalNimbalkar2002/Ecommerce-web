import React, { useState } from "react";
import SubNavBar from "../../Component/SubNavBar/SubNavBar";
import NavBar from "../../Component/NavBar/NavBar";
import ThirdNavBar from "../../Component/ThirdNavBar/ThirdNavBar";
import ProductsHomePage from "../../Component/ProductsHomePage/ProductsHomePage";

const HomePageOne = () => {
  return (
    <div className="home-page-1-div">
      <NavBar />
      <SubNavBar />
      <ThirdNavBar />
      <ProductsHomePage />
    </div>
  );
};

export default HomePageOne;
