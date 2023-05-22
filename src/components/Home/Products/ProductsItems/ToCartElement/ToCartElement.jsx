import styles from "./ToCartElement.module.css";
import cartImage from "../../../../../assets/images/buy.svg";
import {useState } from "react";
import { DECREASE__PRICE, INCREASE__PRICE } from "../../../../../reducer/types";

const ToCartElement = ({productPrice, cartCount, cartPrice, dispatch, id, category}) => {

    const [isVisible, setIsVisible] = useState(cartPrice >= productPrice ? true : false);

    const incrementCountOfProduct = ({currentTarget}) => {
        dispatch({type: INCREASE__PRICE, category: category, id: currentTarget.id});
    }

    const decrementCountOfProduct = ({currentTarget}) => {
        if(cartCount === 1) {
            setIsVisible(!isVisible); 
            dispatch({type: DECREASE__PRICE, category: category, id: currentTarget.id });
        } else {    
            dispatch({type: DECREASE__PRICE, category: category, id: currentTarget.id });
        } 

    }

    return(
        <>
        {isVisible
                            
            ?   <div className={styles.item__changeContainer}> 
                    <div className= {styles.item__countCart}>{cartCount}</div>
                    <button 
                    className={[styles.button, styles.buttonChangePrice].join(' ')}
                    onClick = {decrementCountOfProduct}
                    id = {id + 99}
                    >
                        -
                    </button>
                    <span className={styles.item__price}>{cartPrice} ₽</span>
                    <button 
                    className={[styles.button, styles.buttonChangePrice].join(' ')}
                    onClick={incrementCountOfProduct}
                    id = {id}
                    >
                        +
                    </button>
                </div>

            :   <div className={styles.item__buyBlock}>
                    <span className={styles.item__price}>{productPrice} ₽</span>
                    <button className={styles.button} id = {id}
                    onClick={(event) => {
                        incrementCountOfProduct(event);
                        setIsVisible(!isVisible);
                        } 
                    }
                    >
                        <span>В корзину</span>
                        <img src={cartImage} alt="buy" />
                    </button>
                </div> 
            }
        </>
    )
}

export default ToCartElement;