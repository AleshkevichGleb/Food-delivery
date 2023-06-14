import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../data/initialState";

const findProduct = (state, action, flag) => {
    let product = null;

    const {category, id} = action.payload
    state.forEach(type => {
        if(category === type.link) {
            type.products.forEach(elem => {
                if(flag) {
                    if(elem.id+99 === +id) {
                        product = elem;
                    }
                }else {
                    if(elem.id === +id) {
                        product = elem;
                    }
                }
            })
        }
    })   
    return product;                                              
}

const productSlice = createSlice({
    name: 'productCounter',
    initialState: initialState,
    reducers:{
        increase_price:(state, action) => {
            const product = findProduct(state, action);
            console.log(product);
            product.cartCount +=1;
            product.cartPrice +=product.price;
        },
        decrease_price: (state, action) => {
            const product = findProduct(state, action, 'flag');
            product.cartCount -= 1;
            product.cartPrice -= product.price;
        },
 
         backup_count_to_null: (state, action) => {
             const product = findProduct(state, action);
             product.cartCount = 0;
             product.cartPrice = 0;
        } 
      
    }
})


export const {increase_price, decrease_price, backup_count_to_null} = productSlice.actions;


export default productSlice.reducer;