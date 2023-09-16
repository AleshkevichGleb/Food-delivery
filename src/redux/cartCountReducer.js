import { initialCartCount } from "./initialCartCount";

const INCREASE__COUNT = 'INCREASE__COUNT';
const DECREASE__COUNT = 'DECREASE__COUNT';

export const increaseCount = (payload) => ({type:INCREASE__COUNT, payload});
export const decreaseCount = (payload) => ({type:DECREASE__COUNT, payload});

const cartCountReducer = (state = initialCartCount, action) => {
    switch(action.type) {
        case INCREASE__COUNT: {
            return{
                ...state, count: state.count + action.payload 
            }
        }

        case DECREASE__COUNT: {
            return{
                ...state, count: state.count - action.payload 
            }
        }

        default: return state;
    }
}

export default cartCountReducer;