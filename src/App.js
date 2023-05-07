import { Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import React from "react";
import Cart from "./components/CartMain/Cart";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductsItems from "./components/Home/Products/ProductsItems/ProductsItems";
import Layout from "./components/Layout/Layout";
import { typesEat } from "./data/data";
import { data } from "./data/data";

function App() {
  return (
    <>
        <Routes>
          <Route path = '/' element = {<Layout/>}>
            {/* <Route index element = {<Home/>}/> */}
            {typesEat.map(type => 
              <Route key = {type.link} path = {type.link} element = {<ProductsItems data = {data.filter(item => type.text === item.type)}/>}/>
              )}
          </Route>
          <Route path = '/cart' element = {<Cart/>} />
        </Routes>
    </>
  );
}

export default App;
