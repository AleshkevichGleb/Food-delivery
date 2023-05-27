import "../../../../../index.css";
import styles from "./Product.module.scss";
import { useReducer } from "react";
import { productReducer } from "../../../../../reducer/productReducer";
import { initialState } from "../../../../../reducer/initialState";
import { Link, useParams } from "react-router-dom";
import ToCartElement from "../ToCartElement/ToCartElement";

const Product = () => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const {url, id} = useParams();

    const {products} = state.find(el => el.link === url);

    const {description,
           title,
           image,
           price, 
           cartCount,
           cartPrice,
           weight,

        } = products.find(el => el.id === +id);

    console.log(cartPrice);

    return(
        <div className="main">
            <div className={styles.page__container}>
                <Link to = {`/${url}`}><span className={styles.goBack}>Вернуться назад</span></Link>
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
                                />
                            </div>
                            <div className={styles.product__composition}>sfdsfsdf</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;