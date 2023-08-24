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
            <Product
            id = "6753421" 
            title="Four Candies Cute Mechanical Pencil Set, 6PCS Pastel Mechanical Pencils 0.5mm &amp; 0.7mm with 360PCS HB Pen..."
            price={11.59}
            image= {require("./images/product-one.webp")}
            rating={5}
            />
            <Product 
            id = "7689654" 
            title="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera..."
            price={102.67}
            image= {require("./images/product-two.jpg")}
            rating={5}
            />
        </div>
        <div className="home__row">
            <Product 
            id = "7864312"
            title="Emica Home Glass Storage Jars with Bamboo Airtight Lids..."
            price={24.99}
            image= {require("./images/product-three.webp")}
            rating={5}
            />
            <Product 
            id = "4321098"
            title="Speed Stick Men's Deodorant, Regular, 3 Ounce, 4 Pack"
            price={9.70}
            image= {require("./images/product-four.webp")}
            rating={5}
            />
            <Product 
            id = "2314567"
            title="Marcy Dual Action Cross Training Recumbent..."
            price={11.20}
            image= {require("./images/product-five.webp")}
            rating={5}
            />
        </div>
        <div className="home__row">
          <Product 
          id = "16543209"
          title="Sceptre Curved 24.5-inch Gaming Monitor up to 240Hz 1080p R1500 1ms DisplayPort x2 HDMI x2 Blue Light..."
          price={149.97}
          image= {require("./images/product-six.jpg")}
          rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
