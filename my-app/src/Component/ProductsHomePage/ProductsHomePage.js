import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductsHomePage.css";

const ProductsHomePage = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setproducts(response.data);
    });

    console.log("products:::::", products);
  }, []);

  return (
    <div className="ProductsHomePage-flex-div">
      <div className="ProductsHomePage-width-div">
        <div className="ProductsHomePage-main-div">
          <div className="ProductsHomePage-main-div-one">
            <div className="ProductsHomePage-main-div-one-padding">
              <p>Filters</p>
            </div>
          </div>

          <div className="ProductsHomePage-main-div-two">
            <div className="ProductsHomePage-main-div-two-for-flex">
              {products &&
                products?.map((index) => (
                  <div classname="products-card-main-div-one">
                    <div classname="products-card-div-fo-img">
                      <img
                        src={index.image}
                        alt=""
                        className="products-card-div-for-image-tag"
                      />
                    </div>
                    <div>
                      <p className="products-title-para-tag">{index.title}</p>
                      <div className="products-price-div">
                        <p>${index.price}</p>
                      </div>
                      <p className="category-of-product">{}</p>
                    </div>
                    <div className="description-of-product">
                      <p className="description-para-tag">
                        {index.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHomePage;
