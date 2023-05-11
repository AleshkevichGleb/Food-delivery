import styles from "./ProductsItems.module.css";
import cartImage from "../../../UI/toCartButton/buy.svg";
import { useParams } from "react-router-dom";
import { typesEat } from "../../../../data/data";
import { useState } from "react";
import OurCaffe from "../../OurCaffe/OurCaffe";

const ProductsItems = ({fullCount, setfullCount}) => {
    const {url} = useParams();
    
    const {title} = typesEat.find(type => {
        if(url === undefined) {
            return type.link === 'cold'
        }
        return type.link === url
    });

    const {products} = typesEat.find(type => {
        if(url === undefined) {
            return type.link === 'cold'
        }
        return type.link === url
    });

    const [countOfProduct, setCountOfProduct] = useState(0);
    // const [fullPrice, setFullPrice] = useState(0)

    const incrementCountOfProduct = (product) => {
        product.count++;
        setCountOfProduct(countOfProduct + 1);
        setfullCount(fullCount + 1)

    }

    const decrementCountOfProduct = (product) => {
        product.count--;
        setCountOfProduct(countOfProduct - 1);
        setfullCount(fullCount - 1)

    }

    return(
        <>
        <div className={styles.productsItems}>
            <div className={styles.productsItems__titleContainer}>
                <h2 className={styles.productsItems__title}>{title}</h2>
            </div>
            <div className={styles.itemsContainer}>
                {
                    products.map(product =>
                    <div key = {product.id} className={styles.item}>
                        {countOfProduct > 0 && <div className= {styles.item__countCart}>{product.count}</div>}
                        <img className={styles.item__image} src={product.image.src} alt={product.image.alt} />
                        <div className={styles.item__container}>
                            <div className={styles.item__titleInfo}>
                                <h3 className={styles.item__title}>{product.title}</h3>
                                <span className={styles.item__weight}>Вес: {product.weight}г.</span>
                            </div>
                            <span className={styles.item__description}>{product.description}</span>
                            {countOfProduct > 0 
                            
                            ?   <div className={styles.item__changeContainer}> 
                                    <button 
                                    className={[styles.button, styles.buttonChangePrice].join(' ')}
                                    onClick = {() => decrementCountOfProduct(product)}
                                    >
                                        -
                                    </button>
                                    <span className={styles.item__price}>{product.price} ₽</span>
                                    <button 
                                    className={[styles.button, styles.buttonChangePrice].join(' ')}
                                    onClick={() => incrementCountOfProduct(product)}
                                    >
                                        +
                                    </button>
                                </div>

                            :   <div className={styles.item__buyBlock}>
                                    <span className={styles.item__price}>{product.price} ₽</span>
                                    <button className={styles.button} onClick={() => incrementCountOfProduct(product)}>
                                        <span>В корзину</span>
                                        <img src={cartImage} alt="buy" />
                                    </button>
                                </div> 
                            }
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