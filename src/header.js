import React from "react";
import "./header.css";
//import image from "../images/amazon-logo.png";

function header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={require("./images/amazon-logo.png")}
        alt=""
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <img className="header__searchIcon" src={require("./images/search-btn.png")} />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">& sing In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

      </div>
      <div className="header__optionBasket">
        <img className="header__basket" src={require("./images/basket.png")} />
        0
      </div>
    </div>
  );
}

export default header;
