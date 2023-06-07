import styles from "./ToCartElement.module.css";
import cartImage from "../../../../../assets/images/buy2.svg";
import {useState } from "react";
import { BACK_UP_COUNT_TO_NULL, DECREASE__PRICE, INCREASE__PRICE } from "../../../../../reducer/types";
import Button from "../../../../../common/Button/Button";
import { useContext } from "react";
import { AppContext } from "../../../../../App";
import { decreasePrice, increasePrice } from "../../../../../redux/productReducer";

const ToCartElement = ({product, dispatch, category, addStyles, title, src, flag , addStyles2}) => {
    const {price, cartCount, cartPrice, id} = product;
    const {fullCount, setFullCount} = useContext(AppContext);
    const [isVisible, setIsVisible] = useState(cartPrice >= price);

    const incrementCountOfProduct = ({currentTarget}) => {
        const product = {category: category, id: currentTarget.id}
        dispatch(increasePrice(product))
        // dispatch({type: INCREASE__PRICE, category: category, id: currentTarget.id});
        setFullCount(fullCount + 1)
    }

    const decrementCountOfProduct = ({currentTarget}) => {
        if(cartCount === 1) {
            setIsVisible(!isVisible);
        }    
        setFullCount(fullCount - 1)
        const product = {category: category, id: currentTarget.id}
        dispatch(decreasePrice(product))

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