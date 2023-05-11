import { Routes, Route, useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import React, { useState } from "react";
import Cart from "./components/CartMain/Cart";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductsItems from "./components/Home/Products/ProductsItems/ProductsItems";
import { typesEat } from "./data/data";
import { data } from "./data/data";
import Delivery from "./components/Delivery/Delivery";
import Promotion from "./components/Promotion/Promotion";

function App() {
  const {state} = useLocation();

  const [fullCountofProducts, setfullCountofProducts] = useState(0);

  return (
    <>
        <Header fullCount = {fullCountofProducts}/>
        {!state && <Home/>}
        <Routes>
            <Route path = '/' element = {<ProductsItems fullCount = {fullCountofProducts} setfullCount = {setfullCountofProducts}/>}/>
            <Route path = '/:url' element = {<ProductsItems fullCount = {fullCountofProducts} setfullCount = {setfullCountofProducts}/>}/>
            <Route path = '/cart' element = {<Cart/>}/>
            <Route path = '/delivery' element = {<Delivery/>}/>
            <Route path = '/promotion' element = {<Promotion/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
