import { combineReducers, createStore } from "redux";
import productReducer from "./productReducer";
import cartCountReducer from "./cartCountReducer";

const rootReducer = combineReducers({
    productReducer,
    cartCountReducer,
})

export const store = createStore(rootReducer);