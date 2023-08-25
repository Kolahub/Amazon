import React from "react";
import "./App.css";
import Header from "./header";
import Home from "./Home";
import Checkout from "./Checkout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    // BEM
    <Router>
      <div className="App">
      <Routes>
        <Route path="/checkout" element={<><Header/> <Checkout/></>}/>
        <Route path="/" element={<><Header/><Home/></>}/>
      </Routes>
      </div>
    </Router>
  );
}
export default App;
