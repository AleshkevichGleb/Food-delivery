import styles from "./ProductsItems.module.css";
import { useParams } from "react-router-dom";
import { typesEat } from "../../../../data/data";
import { useReducer, useState } from "react";
import OurCaffe from "../../OurCaffe/OurCaffe";
import ToCartElement from "./ToCartElement/ToCartElement";
import { productReducer } from "../../../../reducer/productReducer";
import { initialState } from "../../../../reducer/initialState";
import Title from "../../../../common/Title/Title";

const ProductsItems = () => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const {url} = useParams();
    
    const {title, products, link} = state.find(type => {
        if(url === undefined) {
            return type.link === 'cold'
        }
        return type.link === url
    });

    return(
        <>
        <div className={styles.productsItems} key = {link}>
            <Title title={title}/>
            <div className={styles.itemsContainer}>
                {
                    products.map(product =>
                    <div key = {product.id} className={styles.item}>
                        <img className={styles.item__image} src={product.image.src} alt={product.image.alt} />
                        <div className={styles.item__container}>
                            <div className={styles.item__titleInfo}>
                                <h3 className={styles.item__title}>{product.title}</h3>
                                <span className={styles.item__weight}>Вес: {product.weight}г.</span>
                            </div>
                            <span className={styles.item__description}>{product.description}</span>
                            
                            <ToCartElement 
                            dispatch = {dispatch} 
                            cartPrice = {product.cartPrice}
                            cartCount={product.cartCount}
                            productPrice = {product.price}
                            category={link}
                            id = {product.id}/>

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