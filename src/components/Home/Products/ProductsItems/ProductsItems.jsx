import styles from "./ProductsItems.module.css";
import ProductsTitle from "../ProductsTitle/ProductsTitle";
import duck from "../../../../assets/images/duck.png";
import ToCartButton from "../../../UI/toCartButton/ToCartButton";

const ProductsItems = ({data}) => {
    return(
        <div className={styles.productsItems}>
            <div className={styles.productsItems__titleContainer}>
                <h2 className={styles.productsItems__title}>{data[0].type}</h2>
            </div>
            <div className={styles.itemsContainer}>
                {data.map(dish => 
                    <div className={styles.item}>
                        <img src={duck} alt="" />
                        <div>
                            <h3>{dish.title}</h3>
                            <span>Вес: {dish.weight}г.</span>
                        </div>
                        <span>{dish.description}</span>
                        <div>
                            <span className={styles.item__price}>{dish.price} ₽</span>
                            <ToCartButton>
                                В корзину
                            </ToCartButton>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default ProductsItems;