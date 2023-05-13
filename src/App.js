import { Routes, Route, useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import React, { useEffect, useState } from "react";
import Cart from "./components/CartMain/Cart";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductsItems from "./components/Home/Products/ProductsItems/ProductsItems";
import Delivery from "./components/Delivery/Delivery";
import Promotion from "./components/Promotion/Promotion";

function App() {
  const [fullCountofProducts, setfullCountofProducts] = useState(0);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
      .then((response) => response.json())
      .then(({current_weather}) => {
        const newObj = {
          city: 'Minsk',
          temperature: current_weather.temperature,
          time: current_weather.time,
        }
        setWeather({...newObj});
      }).catch(() => '')

  }, []);

  const {state} = useLocation();

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
        <Footer weather = {weather}/>
    </>
  );
}

export default App;
