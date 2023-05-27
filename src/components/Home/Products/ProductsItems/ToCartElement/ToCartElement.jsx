import styles from "./ToCartElement.module.css";
import cartImage from "../../../../../assets/images/buy2.svg";
import {useState } from "react";
import { DECREASE__PRICE, INCREASE__PRICE } from "../../../../../reducer/types";
import Button from "../../../../../common/Button/Button";
import { useContext } from "react";
import { AppContext } from "../../../../../App";

const ToCartElement = ({productPrice, cartCount, cartPrice, dispatch, id, category}) => {

    const {fullCount, setFullCount} = useContext(AppContext);

    const [isVisible, setIsVisible] = useState(cartPrice >= productPrice);

    const incrementCountOfProduct = ({currentTarget}) => {
        dispatch({type: INCREASE__PRICE, category: category, id: currentTarget.id});
        setFullCount(fullCount + 1)
    }

    const decrementCountOfProduct = ({currentTarget}) => {
        if(cartCount === 1) {
            setIsVisible(!isVisible); 
        }    
        setFullCount(fullCount - 1)
        dispatch({type: DECREASE__PRICE, category: category, id: currentTarget.id });

    }
    
    return(
        <>
        {isVisible
                            
            ?   <div className={styles.item__changeContainer}> 
                    <div className= {styles.item__countCart}>{cartCount}</div>
                    <Button 
                    addStyles={styles.buttonChangePrice}
                    onClick = {decrementCountOfProduct}
                    id = {id + 99}
                    title = '-'
                    />
                    <span className={styles.item__price}>{cartPrice} ₽</span>
                    <Button 
                    addStyles={styles.buttonChangePrice}
                    onClick={incrementCountOfProduct}
                    id = {id}
                    title = '+'
                    />
                </div>

            :   <div className={styles.item__buyBlock}>
                    <span className={styles.item__price}>{productPrice} ₽</span>
                    <Button
                        onClick={(event) => {
                            incrementCountOfProduct(event);
                            setIsVisible(!isVisible);
                            }
                        }
                        id = {id}
                        title = 'Корзина'
                        src = {cartImage}
                        addStyles={styles.button}
                    />
                </div> 
            }
        </>
    )
}

export default ToCartElement;