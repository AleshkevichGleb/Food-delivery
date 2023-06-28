import { Routes, Route, useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import React, { useEffect, useState} from "react";
import Cart from "./components/CartMain/Cart";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductsItems from "./components/Home/Products/ProductsItems/ProductsItems";
import Delivery from "./components/Delivery/Delivery";
import Promotion from "./components/Promotion/Promotion";
import OrderPage from "./components/OrderPage/OrderPage";
import Product from "./components/Home/Products/ProductsItems/Product/Product";
import AboutPage from "./components/AboutPage/AboutPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Preloader from "./common/Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "./reduxToolkit/weatherSlice";
import { calc_cart_count } from "./reduxToolkit/fullCartCountSlice";

function App() {
  const [isPreloader, setIsPreloader] = useState(false);
  const {status, weather, error} = useSelector(state => state.weather);
  const products = useSelector(state => state.productCountChange)

  const dispatch = useDispatch();

  useEffect(() => {
    setIsPreloader(true);

    if(status === "idle") {
      dispatch(getWeather()); 
    }

    if(status === 'failed') {
      setIsPreloader(false)
    }
    if(status === 'succeeded') {
      const storage = JSON.parse(localStorage.getItem('products'));
      if(storage == null || !storage.length ) {
        localStorage.setItem('products', JSON.stringify(products))
      }

      setIsPreloader(false)
    }

    dispatch(calc_cart_count());

  }, [status, dispatch, products]);

  const {state: stateLocation} = useLocation();

  return (
    <>
          {isPreloader 
          ? <Preloader/>
          : <>
            <Header/>
            {!stateLocation && <Home/>}
            <Routes>
                <Route path = '/' element = {<ProductsItems/>}/>
                <Route path = '/:url' element = {<ProductsItems/>}/>
                <Route path = '/:url/:id' element = {<Product/>}/>
                <Route path = '/cart' element = {<Cart/>}/>
                <Route path = '/delivery' element = {<Delivery/>}/>
                <Route path = '/promotion' element = {<Promotion/>}/>
                <Route path = '/order' element = {<OrderPage/>}/>
                <Route path = '/about' element = {<AboutPage/>}/>
                <Route path = '/profile' element = {<ProfilePage/>}/>
            </Routes>
            <Footer weather = {weather} error = {error}/>
            </>
          }
    </>
  );
}

export default App;
