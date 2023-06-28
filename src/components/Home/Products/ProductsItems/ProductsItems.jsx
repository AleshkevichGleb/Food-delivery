import styles from "./ProductsItems.module.css";
import { Link, useParams } from "react-router-dom";
import ToCartElement from "./ToCartElement/ToCartElement";
import Title from "../../../../common/Title/Title";
import buy from "../../../../assets/images/buy.svg";
import { useDispatch, useSelector } from "react-redux";
import { calc_cart_count } from "../../../../reduxToolkit/fullCartCountSlice";
import { useEffect } from "react";

const ProductsItems = () => {
    const state = useSelector(state => state.productCountChange);
    const dispatch = useDispatch();
    const {url} = useParams();
    
    const {title, products, link} = state.find(type => {
        if(url === undefined) {
            return type.link === 'cold'
        }
        return type.link === url
    });

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('products'));
        if(storage !== null) {
            dispatch(calc_cart_count())
        }
    }, [dispatch, state])
  

    return(
        <>
        <div className={styles.productsItems} key = {link}>
            <Title title={title}/>
            <div className={styles.itemsContainer}>
                {
                    products.map(product =>
                    <div key = {product.id} className={styles.item}>
                        <Link state = {true} to = {`/${link}/${product.id}`}>
                            <img className={styles.item__image} src={product.image.src} alt={product.image.alt} />
                        </Link>
                        <div className={styles.item__container}>
                            <div className={styles.item__titleInfo}>
                                <h3 className={styles.item__title}>{product.title}</h3>
                                <span className={styles.item__weight}>Вес: {product.weight}г.</span>
                            </div>
                            <span className={styles.item__description}>{product.description}</span>
                            <ToCartElement 
                                dispatch = {dispatch} 
                                product={product}
                                category={link}
                                id = {product.id}
                                title = 'В корзину'
                                src = {buy}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
        {/* <OurCaffe/>  */}
        </>
    )
}

export default ProductsItems;