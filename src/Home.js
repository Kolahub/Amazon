import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image"
          src={require('./images/bg-img.jpg')} alt=""
        />

        <div className="home__row">
            <Product />
            <Product />
        </div>
        <div className="home__row">
            {/* product*/}
            {/* product*/}
            {/* product*/}
        </div>
        <div className="home__row">
            {/* product*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
