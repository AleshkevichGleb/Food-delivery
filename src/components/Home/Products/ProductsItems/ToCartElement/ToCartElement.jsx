import styles from "./ToCartElement.module.css";
import cartImage from "../../../../../assets/images/buy.svg";
import { useState } from "react";

const ToCartElement = ({productPrice, fullCount, setfullCount}) => {
    const [countOfProduct, setCountOfProduct] = useState(1);
    const [priceOfProduct, setPriceOfProduct] = useState(productPrice);
    
    const [isVisible, setIsVisible] = useState(false);

    const basketData = [];

    const incrementCountOfProduct = () => {
        setCountOfProduct(countOfProduct + 1);
        setPriceOfProduct(priceOfProduct + productPrice);
        setfullCount(fullCount + 1)

    }

    const decrementCountOfProduct = () => {
        if(countOfProduct === 1) {
            setIsVisible(!isVisible);  
            setfullCount(fullCount - 1)
        } else {
            setPriceOfProduct(priceOfProduct - productPrice);
            setCountOfProduct(countOfProduct - 1);
            setfullCount(fullCount - 1)
        } 

    }


    return(
        <>
        {isVisible
                            
            ?   <div className={styles.item__changeContainer}> 
                    <div className= {styles.item__countCart}>{countOfProduct}</div>
                    <button 
                    className={[styles.button, styles.buttonChangePrice].join(' ')}
                    onClick = {decrementCountOfProduct}
                    >
                        -
                    </button>
                    <span className={styles.item__price}>{priceOfProduct} ₽</span>
                    <button 
                    className={[styles.button, styles.buttonChangePrice].join(' ')}
                    onClick={incrementCountOfProduct}
                    >
                        +
                    </button>
                </div>

            :   <div className={styles.item__buyBlock}>
                    <span className={styles.item__price}>{priceOfProduct} ₽</span>
                    <button className={styles.button} 
                    onClick={() => 
                        {
                            setIsVisible(!isVisible); 
                            setfullCount(fullCount + 1)
                        }}
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