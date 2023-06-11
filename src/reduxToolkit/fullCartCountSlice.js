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
        }   
    }
})

export const {increase_cart_count, decrease_cart_count} = fullCartCountSlice.actions;

export default fullCartCountSlice.reducer;