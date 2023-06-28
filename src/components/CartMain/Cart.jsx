import styles from "./Cart.module.css";
import Title from "../../common/Title/Title";
import { constants } from "../../constants/constants";
import BackLink from "../../common/BackLink/BackLink";
import { memo, useEffect, useState } from "react";
import EmptyBasket from "./EmptyBasket/EmptyBasket";
import ToCartElement from "../Home/Products/ProductsItems/ToCartElement/ToCartElement";
import Button from "../../common/Button/Button";
import CartOrder from "./CartOrder/CartOrder";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { backup_count_to_null } from "../../reduxToolkit/productSlice";
import { calc_cart_count, decrease_cart_count } from "../../reduxToolkit/fullCartCountSlice";

const Cart = memo(() => {
    const [basket, setBacket] = useState([]);
    const state = useSelector(state => state.productCountChange);
    const dispatch = useDispatch();
    const products = useSelector(state => state.productCountChange)
    
    useEffect(() => {
        let editState = [];
        let storage = JSON.parse(localStorage.getItem('products'));
        if(storage === null || !storage.length) {
            localStorage.setItem('products', JSON.stringify(products))
            storage = JSON.parse(localStorage.getItem('products'));
        }
            
        storage.forEach(type => {
            const {link} = type;
            type.products.forEach(el=> {
                if(el.cartCount > 0) editState = [...editState, {...el, link}];
            })
        })

        setBacket(editState);
        dispatch(calc_cart_count())
    }, [state, dispatch, basket])

    const removeFromBasket = ({currentTarget}) => {
        const {link} = basket.find(el => el.id === +currentTarget.id);
        basket.forEach(el => {
            if(el.id === +currentTarget.id) {
                dispatch(backup_count_to_null({category: link, id: currentTarget.id}));
            }
        })
       
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