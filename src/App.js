import { Routes, Route, useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import React, { useEffect, useState, useReducer} from "react";
import Cart from "./components/CartMain/Cart";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductsItems from "./components/Home/Products/ProductsItems/ProductsItems";
import Delivery from "./components/Delivery/Delivery";
import Promotion from "./components/Promotion/Promotion";
import OrderPage from "./components/OrderPage/OrderPage";
import { createContext } from "react";
import Product from "./components/Home/Products/ProductsItems/Product/Product";
import AboutPage from "./components/AboutPage/AboutPage";
import { productReducer } from "./reducer/productReducer";
import { initialState } from "./reducer/initialState";
import ProfilePage from "./components/ProfilePage/ProfilePage";

export const AppContext = createContext()

function App() {
  const [fullCount, setFullCount] = useState(0);
  const [state, dispatch] = useReducer(productReducer, initialState)
  
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

  const {state: stateLocation} = useLocation();

  return (
    <>
      <AppContext.Provider value={{fullCount, setFullCount, state, dispatch}}>
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
          <Footer weather = {weather}/>
        </AppContext.Provider>
    </>
  );
}

export default App;
