import styles from "./Cart.module.css";
import Title from "../../common/Title/Title";
import ButtonLink from "../../common/ButtonLink/ButtonLink";
import { constants } from "../../constants/constants";
import BackLink from "../../common/BackLink/BackLink";
import { memo, useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import EmptyBasket from "./EmptyBasket/EmptyBasket";
import ToCartElement from "../Home/Products/ProductsItems/ToCartElement/ToCartElement";
import Button from "../../common/Button/Button";
import { BACK_UP_COUNT_TO_NULL } from "../../reducer/types";
import CartOrder from "./CartOrder/CartOrder";
import { Link } from "react-router-dom";


const Cart = memo(() => {
    const {state, dispatch, setFullCount, fullCount, basket, setBacket} = useContext(AppContext);
    // console.log(state);
  
   

    useEffect(() => {
        let editState = [];
        state.map(type => {
            const {link} = type;
            type.products.map(el=> {
                if(el.cartCount > 0) editState = [...editState, {...el, link}];
            })
        })
        console.log(basket);
        setBacket(editState);

       
    }, [state])

    const removeFromBasket = ({currentTarget}) => {
        const {link} = basket.find(el => el.id === +currentTarget.id);

        basket.map(el => {
            if(el.id === +currentTarget.id) setFullCount(fullCount-el.cartCount);
        })

        dispatch({type: BACK_UP_COUNT_TO_NULL, category: link, id: currentTarget.id})       
    }

    return(
        <div className="main">
            <div className={styles.basketContainer}>
                <BackLink title = 'к выбору блюд'/>
                <Title title={constants.basket}/>
                {
                    basket.length
                    ?   <>
                            <div className={styles.basket}>
                                {
                                    basket.map(product => 
                                        <div key = {product.id} className={styles.basket__product}>
                                            <div className={styles.product__info}>
                                                <Link state = {true} to = {`/${product.link}/${product.id}`}><img className={styles.product__image} src={product.image.src} alt={product.image.alt} /></Link>
                                                <div className={styles.product__infoText}>
                                                    <span className={styles.product__title}>{product.title}</span>
                                                    <span className={styles.product__text}>{product.description}</span>
                                                </div>
                                            </div>
                                            <div className={styles.product__orderInfo}>
                                                <ToCartElement
                                                    category={product.link}
                                                    product={product}
                                                    dispatch = {dispatch}
                                                    id = {product.id}
                                                    addStyles = {styles.cartCount}
                                                    addStyles2 = {styles.changeCountButton}
                                                    flag = "cart"
                                                />
                                                <span className={styles.product__price}>{product.cartPrice} ₽</span>
                                                <Button 
                                                    id = {product.id}
                                                    addStyles={styles.product__removeFromBasketButton} 
                                                    title = '&#x2715;'
                                                    onClick={removeFromBasket}
                                                />
                                            </div>
                                          
                                        </div>    
                                    )
                                }
                            </div>
                            <CartOrder basket = {basket}/>
                        </>
                    :   <EmptyBasket/>
                }
            </div>
        </div>
    )
})

export default Cart;