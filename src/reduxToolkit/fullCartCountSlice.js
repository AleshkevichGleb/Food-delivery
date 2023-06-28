import { createSlice } from "@reduxjs/toolkit";


const fullCartCountSlice = createSlice({
    name: 'fullCartCount',
    initialState: {
        count: 0
    },
    reducers: {
        increase_cart_count: (state, action) => {
            state.count += +action.payload;
        },
        decrease_cart_count: (state, action) => {
            state.count -= +action.payload
        },

        calc_cart_count: (state, action) => {
            let storage = JSON.parse(localStorage.getItem('products'));
            let count = 0;
            storage.forEach(type => {
                type.products.forEach(elem => {
                    if(elem.cartCount > 0) {
                        count += elem.cartCount; 
                    }
                })
            })

            state.count = count;
        },
    }
})

export const {increase_cart_count, decrease_cart_count, calc_cart_count} = fullCartCountSlice.actions;

export default fullCartCountSlice.reducer;