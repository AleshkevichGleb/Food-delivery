import { Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import React from "react";
import Cart from "./components/CartMain/Cart";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
        <Header/>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/cart' element = {<Cart/>} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
