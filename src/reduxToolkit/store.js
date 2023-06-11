import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import fullCartCountSlice from "./fullCartCountSlice";
import weatherSlice from "./weatherSlice";

const rootReducer = combineReducers({
    productCountChange: productSlice,
    fullCountCartChange: fullCartCountSlice,
    weather: weatherSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})