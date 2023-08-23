import React from "react";
import "./App.css";
import Header from "./header";
import Home from "./Home";
import Product from "./Product";

function App() {
  return (
    // BEM
    <div className="App">
      <Header />
      <Home />
      <Product />
    </div>
  );
}

export default App;
