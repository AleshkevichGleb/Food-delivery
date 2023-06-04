import { INCREASE__PRICE, DECREASE__PRICE, BACK_UP_COUNT_TO_NULL } from "./types";

export const productReducer = (state, action) => {
    switch(action.type) {

        case INCREASE__PRICE: {

            const {id, category} = action;

            const newState = state.map(type => {
                
                if(category === type.link) {
                   
                    const products = type.products.map(product => {
                        
                        if(product.id === +id) {
                            return {
                                ...product,
                                cartPrice: product.cartPrice + product.price, 
                                cartCount: product.cartCount + 1
                            }
                        }
        
                        return product;
                    }) 
                    return {...type, products: products };
                }
                return type;
            })

            return newState;
        }

        case DECREASE__PRICE: {

            const {id, category} = action;

            const newState = state.map(type => {

                if(category === type.link) {

                    const products = type.products.map(product => {
                        if(product.id + 99 === +id) {
                            return{
                                ...product,
                                cartPrice: product.cartPrice - product.price,
                                cartCount: product.cartCount - 1
                            }
                        }

                        return product;
                    })

                    return {...type, products: products};
                }

                return type;
            })

            return newState;
        }

        case BACK_UP_COUNT_TO_NULL: {

            const {id, category} = action;

            const newState = state.map(type => {

                if(category === type.link) {

                    const products = type.products.map(product => {
                        if(product.id === +id) {
                            return{
                                ...product,
                                cartPrice: 0,
                                cartCount: 0
                            }
                        }

                        return product;
                    })

                    return {...type, products: products};
                }

                return type;
            })

            return newState;
        }

    }
}