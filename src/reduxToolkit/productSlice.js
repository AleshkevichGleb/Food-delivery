import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../data/initialState";

const findProduct = (state, action) => {
    let product = null;

    const {category, id} = action.payload
    state.forEach(type => {
        if(category === type.link) {
            type.products.forEach(elem => {
                if(elem.id === +id || elem.id+99 === +id) {
                    product = elem;
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
            const {category, id} = action.payload
            const product = findProduct(state, action);
            product.cartCount += 1;
            product.cartPrice +=product.price;
            let storage = JSON.parse(localStorage.getItem('products'));
            storage.forEach(type => {
                if(category === type.link) {
                    type.products.map(elem => {
                        if(elem.id === +id) {
                            elem.cartCount += 1;
                            elem.cartPrice +=product.price;
                        }
                    })
                }
            })
            localStorage.setItem('products', JSON.stringify(storage))
        },
        decrease_price: (state, action) => {
            const {category, id} = action.payload
            const product = findProduct(state, action);
            product.cartCount -= 1;
            product.cartPrice -= product.price;
            let storage = JSON.parse(localStorage.getItem('products'));
            storage.forEach(type => {
                if(category === type.link) {
                    type.products.map(elem => {
                        if(elem.id+99 === +id) {
                            elem.cartCount -= 1;
                            elem.cartPrice -=product.price;
                        }
                    })
                }
            })

            localStorage.setItem('products', JSON.stringify(storage))
        },
 
         backup_count_to_null: (state, action) => {
            const {category, id} = action.payload
            const product = findProduct(state, action);
            product.cartCount = 0;
            product.cartPrice = 0;
            let storage = JSON.parse(localStorage.getItem('products'));
            storage.forEach(type => {
                if(category === type.link) {
                    type.products.map(elem => {
                        if(elem.id === +id) {
                            elem.cartCount = 0;
                            elem.cartPrice = 0;
                        }
                    })
                }
            })

            localStorage.setItem('products', JSON.stringify(storage))

        },

        set_products_from_storage: (state, action) => {
            for(let i = 0; i < state.length; i++) {
                for(let j = 0; j < action.payload.length; j++) {
                    state[i] = action.payload[i]
                }
            }
        }
      
    }
})


export const {increase_price, decrease_price, backup_count_to_null, set_products_from_storage} = productSlice.actions;


export default productSlice.reducer;