import { combineReducers, createStore } from "redux";
import productReducer from "./productReducer";


const rootReducer = combineReducers({
    productCounter: productReducer,
})

export const store = createStore(rootReducer);