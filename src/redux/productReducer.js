import { initialState } from "./initialState";

const INCREASE__PRICE = 'INCREASE PRICE';
const DECREASE__PRICE = 'DECREASE PRICE';
const BACK_UP_COUNT_TO_NULL = "BACK_UP_COUNT_TO_NULL";

export const increasePrice = (payload) => ({type: INCREASE__PRICE, payload});
export const decreasePrice = (payload) => ({type: DECREASE__PRICE, payload});
export const backUpCountToNull = (payload) => ({type: BACK_UP_COUNT_TO_NULL, payload});


const produceReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case INCREASE__PRICE: {

            const {id, category} = action.payload;
            

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

            const {id, category} = action.payload;

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

            const {id, category} = action.payload;

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

        default: return state;
    }
} 

export default produceReducer;