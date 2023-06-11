import styles from "./ToCartElement.module.css";
import {useState } from "react";
import Button from "../../../../../common/Button/Button";
import { decrease_price, increase_price } from "../../../../../reduxToolkit/productSlice";
import { decrease_cart_count, increase_cart_count } from "../../../../../reduxToolkit/fullCartCountSlice";

const ToCartElement = ({product, dispatch, category, addStyles, title, src, flag , addStyles2}) => {
    const {price, cartCount, cartPrice, id} = product;
    const [isVisible, setIsVisible] = useState(cartPrice >= price);

    const incrementCountOfProduct = ({currentTarget}) => {
        const product = {category: category, id: currentTarget.id}
        dispatch(increase_price(product))
        dispatch(increase_cart_count(1))
    }

    const decrementCountOfProduct = ({currentTarget}) => {
        if(cartCount === 1) {
            setIsVisible(!isVisible);
        }    
        const product = {category: category, id: currentTarget.id}
        dispatch(decrease_price(product))
        dispatch(decrease_cart_count(1))
    }
    
    return(
        <>
        {isVisible
                            
            ?   <div className={styles.item__changeContainer}> 
                    <div className= {[styles.item__countCart, addStyles].join(' ')}>{cartCount}</div>
                    <Button 
                    addStyles={[styles.buttonChangePrice, addStyles2].join(' ')}
                    onClick = {decrementCountOfProduct}
                    id = {id + 99}
                    title = '-'
                    />
                    <span className={styles.item__price}>{flag ? cartCount : cartPrice+ '₽'}</span>
                    <Button 
                    addStyles={[styles.buttonChangePrice, addStyles2].join(' ')}
                    onClick={incrementCountOfProduct}
                    id = {id}
                    title = '+'
                    />
                </div>

            :   <div className={styles.item__buyBlock}>
                    <span className={styles.item__price}>{price} ₽</span>
                    <Button
                        onClick={(event) => {
                            incrementCountOfProduct(event);
                            setIsVisible(!isVisible);
                            }
                        }
                        id = {id}
                        title = {title}
                        src = {src}
                        addStyles={styles.button}
                    />
                </div> 
            }
        </>
    )
}

export default ToCartElement;