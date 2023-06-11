import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../data/initialState";

const productSlice = createSlice({
    name: 'productCounter',
    initialState: initialState,
    reducers:{
        increase_price:(state, action) => {
            const {category, id} = action.payload
            state.forEach(type => {
                if(category === type.link) {
                    type.products.forEach(product => {
                        if(product.id === +id) {
                            product.cartCount += 1;
                            product.cartPrice += product.price;
                        }
                    })
                }
            })
        },

        decrease_price: (state, action) => {
            const {category, id} = action.payload
            console.log(category, id);
            state.forEach(type => {
                if(category === type.link) {
                    type.products.forEach(product => {
                        if(product.id + 99 === +id) {
                            product.cartCount -= 1;
                            product.cartPrice -= product.price;
                        }
                    })
                }
            })
        },

        backup_count_to_null: (state, action) => {
            const {category, id} = action.payload
            console.log(category, id);
            state.forEach(type => {
                if(category === type.link) {
                    type.products.forEach(product => {
                        if(product.id === +id) {
                            product.cartCount = 0;
                            product.cartPrice = 0;
                        }
                    })
                }
            })
        } 
    }
})


export const {increase_price, decrease_price, backup_count_to_null} = productSlice.actions;


export default productSlice.reducer;