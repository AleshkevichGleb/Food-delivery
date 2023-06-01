import "../../../../../index.css";
import styles from "./Product.module.scss";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ToCartElement from "../ToCartElement/ToCartElement";
import buy2 from "../../../../../assets/images/buy2.svg";
import { AppContext } from "../../../../../App";

const Product = () => {
    const {state, dispatch} = useContext(AppContext);
    const {url, id} = useParams();

    const {products} = state.find(el => el.link === url);

    const {description,
           title,
           image,
           price, 
           cartCount,
           cartPrice,
           weight,
           addInfo

        } = products.find(el => el.id === +id);

    return(
        <div className="main">
            <div className={styles.page__container}>
            <Link to = {`/${url}`}>
                <div className={styles.backContainer}>
                    <div className={styles.backArrow}></div>
                    <span className={styles.goBack}>Вернуться назад</span>
                </div>         
            </Link>
              
               
                <div className={styles.product}>
                    <div className={styles.product__imageBlock}>
                        <img className={styles.image} src={image.src} alt={image.alt} />
                    </div>
                  
                    <div className={styles.product__container}>
                        <div className={styles.product__titleContainer}>
                            <h2 className={styles.product__title}>{title}</h2>
                            <span className={styles.product__description}>{description}</span>
                        </div>

                        <div className={styles.orderInfo}>
                            <div className={styles.buyContainer}>
                                <span className={styles.product__weigth}>Вес: {weight}г.</span>
                                <ToCartElement
                                    productPrice={price}
                                    cartPrice={cartPrice}
                                    cartCount={cartCount}
                                    dispatch = {dispatch}
                                    id = {+id}
                                    category = {url}
                                    addStyles = {styles.cartCount}
                                    title = 'Корзина'
                                    src = {buy2}
                                />
                            </div>
                            <div className={styles.product__composition}>
                                
                                {Object.entries(addInfo).map(el => 
                                    <div className={styles.composition__block} key = {el}>
                                         <span>{el[0]}</span>   
                                         <span className={styles.composition__count}>{el[1]}</span>   
                                    </div> 
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;