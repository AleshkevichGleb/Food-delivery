import styles from "./ProductsItems.module.css";
import cartImage from "../../../UI/toCartButton/buy.svg";

const ProductsItems = ({data}) => {
    console.log(data);
    return(
        <div className={styles.productsItems}>
            <div className={styles.productsItems__titleContainer}>
                <h2 className={styles.productsItems__title}>{data[0].type}</h2>
            </div>
            <div className={styles.itemsContainer}>
                {data.map(dish => 
                    <div className={styles.item}>
                        <img src={dish.image} alt="sdfd" />
                        <div className={styles.item__container}>
                            <div className={styles.item__titleInfo}>
                                <h3 className={styles.item__title}>{dish.title}</h3>
                                <span className={styles.item__weight}>Вес: {dish.weight}г.</span>
                            </div>
                            <span className={styles.item__description}>{dish.description}</span>
                            <div className={styles.item__buyBlock}>
                                <span className={styles.item__price}>{dish.price} ₽</span>
                                {/* <ToCartButton>
                                    В корзину
                                </ToCartButton> */}
                                <button className={styles.button} onClick={() => alert(1)}>
                                    <span>В корзину</span>
                                    <img src={cartImage} alt="buy" />
                                </button>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default ProductsItems;